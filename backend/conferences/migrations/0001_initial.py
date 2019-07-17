# Generated by Django 2.1.7 on 2019-05-11 09:07

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields
import timezone_field.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AudienceLevel",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100, unique=True)),
            ],
            options={
                "verbose_name": "Audience Level",
                "verbose_name_plural": "Audience Levels",
            },
        ),
        migrations.CreateModel(
            name="Conference",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                (
                    "start",
                    models.DateTimeField(blank=True, null=True, verbose_name="start"),
                ),
                (
                    "end",
                    models.DateTimeField(blank=True, null=True, verbose_name="end"),
                ),
                ("name", models.CharField(max_length=100, verbose_name="name")),
                (
                    "code",
                    models.CharField(max_length=10, unique=True, verbose_name="code"),
                ),
                ("timezone", timezone_field.fields.TimeZoneField()),
            ],
            options={
                "verbose_name": "Conference",
                "verbose_name_plural": "Conferences",
            },
        ),
        migrations.CreateModel(
            name="Deadline",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "start",
                    models.DateTimeField(blank=True, null=True, verbose_name="start"),
                ),
                (
                    "end",
                    models.DateTimeField(blank=True, null=True, verbose_name="end"),
                ),
                (
                    "name",
                    models.CharField(
                        blank=True, default="", max_length=100, verbose_name="name"
                    ),
                ),
                (
                    "type",
                    models.CharField(
                        choices=[
                            ("cfp", "Call for proposal"),
                            ("voting", "Voting"),
                            ("refund", "Ticket refund"),
                            ("custom", "Custom deadline"),
                        ],
                        max_length=10,
                        verbose_name="type",
                    ),
                ),
            ],
            options={"abstract": False},
        ),
        migrations.CreateModel(
            name="Duration",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100, verbose_name="name")),
                (
                    "duration",
                    models.PositiveIntegerField(
                        validators=[django.core.validators.MinValueValidator(1)],
                        verbose_name="duration",
                    ),
                ),
                ("notes", models.TextField(blank=True, verbose_name="notes")),
            ],
            options={"verbose_name": "Duration", "verbose_name_plural": "Durations"},
        ),
        migrations.CreateModel(
            name="TicketFare",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                (
                    "start",
                    models.DateTimeField(blank=True, null=True, verbose_name="start"),
                ),
                (
                    "end",
                    models.DateTimeField(blank=True, null=True, verbose_name="end"),
                ),
                ("code", models.CharField(max_length=10, verbose_name="code")),
                ("name", models.CharField(max_length=100, verbose_name="name")),
                ("description", models.TextField(verbose_name="description")),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="price"
                    ),
                ),
                (
                    "conference",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="ticket_fares",
                        to="conferences.Conference",
                        verbose_name="conference",
                    ),
                ),
            ],
            options={
                "verbose_name": "Ticket Fare",
                "verbose_name_plural": "Ticket fares",
            },
        ),
        migrations.CreateModel(
            name="Topic",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100, unique=True)),
            ],
            options={"verbose_name": "Topic", "verbose_name_plural": "Topics"},
        ),
    ]
