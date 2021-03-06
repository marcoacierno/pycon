# Generated by Django 2.2.3 on 2019-07-16 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('conferences', '0001_initial'),
        ('languages', '0001_initial'),
        ('submissions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='duration',
            name='allowed_submission_types',
            field=models.ManyToManyField(to='submissions.SubmissionType', verbose_name='allowed submission types'),
        ),
        migrations.AddField(
            model_name='duration',
            name='conference',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='durations', to='conferences.Conference', verbose_name='conference'),
        ),
        migrations.AddField(
            model_name='deadline',
            name='conference',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deadlines', to='conferences.Conference', verbose_name='conference'),
        ),
        migrations.AddField(
            model_name='conference',
            name='audience_levels',
            field=models.ManyToManyField(to='conferences.AudienceLevel', verbose_name='audience levels'),
        ),
        migrations.AddField(
            model_name='conference',
            name='languages',
            field=models.ManyToManyField(to='languages.Language', verbose_name='languages'),
        ),
        migrations.AddField(
            model_name='conference',
            name='submission_types',
            field=models.ManyToManyField(to='submissions.SubmissionType', verbose_name='submission types'),
        ),
        migrations.AddField(
            model_name='conference',
            name='topics',
            field=models.ManyToManyField(to='conferences.Topic', verbose_name='topics'),
        ),
    ]
