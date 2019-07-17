# Generated by Django 2.1.7 on 2019-06-17 00:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [("orders", "0006_auto_20190612_2034")]

    operations = [
        migrations.AlterField(
            model_name="orderitem",
            name="item_object_id",
            field=models.PositiveIntegerField(verbose_name="item object id"),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="item_type",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="contenttypes.ContentType",
                verbose_name="item type",
            ),
        ),
    ]
