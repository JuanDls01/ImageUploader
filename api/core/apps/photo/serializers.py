from rest_framework import serializers
from apps.photo.models import Photo


class PhotoViewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'
