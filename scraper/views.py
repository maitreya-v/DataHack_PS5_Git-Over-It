from django.shortcuts import render
from .serializers import *
from .models import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView
from .utils import *


class HotelScraperAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = HotelScraperSerializer

    def post(self, request):
        location = request.data['location']
        list1 = scrape_hotels(location)
        return JsonResponse({"message":"success","data":list1}, status=status.HTTP_200_OK)

    
class AttractionsScraperAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = HotelScraperSerializer

    def post(self, request):
        location = request.data['location']
        list1 = scrape_attractions(location)
        return JsonResponse({"message":"success","data":list1}, status=status.HTTP_200_OK)

    