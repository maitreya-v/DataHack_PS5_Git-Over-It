from rest_framework import serializers
from .models import *

class ChatgptSerializer(serializers.Serializer):
    location = serializers.CharField(write_only=True)
    days = serializers.IntegerField(write_only=True)
