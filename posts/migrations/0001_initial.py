# Generated by Django 3.0.7 on 2020-06-11 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mediums', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('date_posted', models.DateTimeField()),
                ('info', models.CharField(max_length=1000)),
                ('image_film', models.CharField(max_length=400)),
                ('image_art', models.CharField(max_length=400)),
                ('image_music', models.CharField(max_length=400)),
                ('film_title', models.CharField(max_length=50)),
                ('art_title', models.CharField(max_length=50)),
                ('music_title', models.CharField(max_length=50)),
                ('mediums', models.ManyToManyField(related_name='posts', to='mediums.Medium')),
            ],
        ),
    ]
