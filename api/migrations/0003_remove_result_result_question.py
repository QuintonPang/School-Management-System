# Generated by Django 3.2.9 on 2021-11-17 13:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211114_1446'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='result_question',
        ),
    ]