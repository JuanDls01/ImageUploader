from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.response import Response

from apps.photo.serializers import PhotoViewSerializers

# Create your views here.


class CreatePhotoAPView(generics.ListCreateAPIView):
    def get(self, request, *args, **kwargs):
        # self.photo = ImageFile
        pass

    def create(self, request, *args, **kwargs):
        file = request.data
        photo_serializer = PhotoViewSerializers(data=file)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return Response({
                'message': 'Aquí va la imagen',
                'photo': photo_serializer.data
            }, status.HTTP_200_OK)

        return Response({
            'message': 'Hubo un error enviando la imagen',
            'errors': photo_serializer.errors,
        }, status.HTTP_400_BAD_REQUEST)
