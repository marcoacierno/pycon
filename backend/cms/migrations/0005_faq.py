# Generated by Django 2.2.5 on 2019-09-28 07:52

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import i18n.fields
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        ('conferences', '0011_auto_20190921_2340'),
        ('cms', '0004_auto_20190922_0814'),
    ]

    operations = [
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('question', i18n.fields.I18nTextField(verbose_name='question')),
                ('answer', i18n.fields.I18nTextField(verbose_name='answer')),
                ('conference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='faqs', to='conferences.Conference', verbose_name='conference')),
            ],
            options={
                'verbose_name': 'FAQ',
                'verbose_name_plural': 'FAQs',
                'unique_together': {('question', 'conference')},
            },
        ),
    ]
