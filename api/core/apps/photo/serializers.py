from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from apps.photo.models import Photo


class PhotoViewSerializers(serializers.ModelSerializer):
    file = Base64ImageField(required=False)

    class Meta:
        model = Photo
        fields = '__all__'
