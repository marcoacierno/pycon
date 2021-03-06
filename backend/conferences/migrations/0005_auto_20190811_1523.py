# Generated by Django 2.2.4 on 2019-08-11 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('conferences', '0004_remove_conference_vote_range'),
    ]

    operations = [
        migrations.AddField(
            model_name='conference',
            name='latitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True, verbose_name='latitude'),
        ),
        migrations.AddField(
            model_name='conference',
            name='longitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True, verbose_name='longitude'),
        ),
    ]
