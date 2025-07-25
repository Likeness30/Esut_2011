from django.shortcuts import render

from rest_framework import viewsets # type: ignore
from .models import Ad
from .serializers import AdSerializer

class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all().order_by('-created_at')
    serializer_class = AdSerializer

