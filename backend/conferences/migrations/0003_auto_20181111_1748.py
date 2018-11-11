# Generated by Django 2.1.1 on 2018-11-11 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('conferences', '0002_deadline'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='conference',
            name='cfp_end',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='cfp_start',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='refund_end',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='refund_start',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='voting_end',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='voting_start',
        ),
        migrations.AlterField(
            model_name='deadline',
            name='conference',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deadlines', to='conferences.Conference', verbose_name='conference'),
        ),
    ]
