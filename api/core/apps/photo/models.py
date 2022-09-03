from django.db import models


class Photo(models.Model):
    file = models.ImageField('Photo', upload_to='photo/',
                             max_length=255, null=False, blank=False)

    def __str__(self):
        return f'self.file'
