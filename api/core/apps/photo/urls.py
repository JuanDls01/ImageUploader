from django.urls import path
from apps.photo.views import CreatePhotoAPView

urlpatterns = [
    path('upload', CreatePhotoAPView.as_view(), name='uploader_photo')
]
