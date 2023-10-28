from rest_framework import serializers
from .models import *


class HotelScraperSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    price = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    location = serializers.CharField(write_only=True)
