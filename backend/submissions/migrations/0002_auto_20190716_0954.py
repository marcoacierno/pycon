# Generated by Django 2.2.3 on 2019-07-16 09:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('conferences', '0003_auto_20190716_0954'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('submissions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='submission',
            name='speaker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='submissions', to=settings.AUTH_USER_MODEL, verbose_name='speaker'),
        ),
        migrations.AddField(
            model_name='submission',
            name='topic',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='conferences.Topic', verbose_name='topic'),
        ),
        migrations.AddField(
            model_name='submission',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='submissions.SubmissionType', verbose_name='type'),
        ),
    ]
