from django.shortcuts import render
from .serializers import *
from .models import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView
from .utils import *
import json


class ChatgptAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ChatgptSerializer

    def post(self, request):
        location = request.data['location']
        days = request.data['days']

        prompt = f"Give a {days} day balanced travel itinerary in {location} in JSON format with fields: (day, description, activities)"
        pred = generate_chatgpt(prompt=prompt)
        obj = json.loads(pred)
        return JsonResponse(obj, status=status.HTTP_200_OK)