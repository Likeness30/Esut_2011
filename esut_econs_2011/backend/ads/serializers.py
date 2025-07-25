from rest_framework import serializers # type: ignore
from .models import Ad

class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = '__all__'
