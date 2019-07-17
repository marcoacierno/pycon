# Generated by Django 2.1.7 on 2019-05-11 09:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("conferences", "0001_initial"),
        ("submissions", "0001_initial"),
        ("schedule", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="scheduleitem",
            name="submission",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                to="submissions.Submission",
                verbose_name="submission",
            ),
        ),
        migrations.AddField(
            model_name="room",
            name="conference",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="rooms",
                to="conferences.Conference",
                verbose_name="conference",
            ),
        ),
    ]
