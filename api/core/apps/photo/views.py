from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from apps.photo.serializers import PhotoViewSerializers

# Create your views here.


class CreatePhotoAPView(APIView):
    def get(self, request, *args):
        return Response({'parsers': ' '.join(map(str, self.parser_classes))}, status=204)

    def post(self, request):
        file = request.data
        print(file)
        photo_serializer = PhotoViewSerializers(data=file)
        if photo_serializer.is_valid():
            photo_serializer.save()
            print(photo_serializer.data)
            return Response({
                'message': 'Aquí va la imagen',
                'photo': photo_serializer.data
            }, status.HTTP_201_CREATED)

        return Response({
            'message': 'Hubo un error enviando la imagen',
            'errors': photo_serializer.errors,
        }, status.HTTP_400_BAD_REQUEST)
