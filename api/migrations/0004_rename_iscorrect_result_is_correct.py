# Generated by Django 3.2.9 on 2021-12-29 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_result_result_question'),
    ]

    operations = [
        migrations.RenameField(
            model_name='result',
            old_name='isCorrect',
            new_name='is_correct',
        ),
    ]