# Generated by Django 4.2 on 2024-07-03 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0002_contacto'),
    ]

    operations = [
        migrations.AddField(
            model_name='contacto',
            name='mensaje_cifrado',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
