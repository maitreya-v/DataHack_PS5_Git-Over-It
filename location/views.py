from django.shortcuts import render
from .serializers import *
from .models import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView

class LocationPOSTAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LocationSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            valid_data = serializer.create(serializer.validated_data)
            return JsonResponse({"message": "success", "data": serializer.validated_data}, status= status.HTTP_201_CREATED)
        else:
            return JsonResponse({"message":"data not valid"}, status=status.HTTP_400_BAD_REQUEST)


class LocationGETAPI(ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LocationSerializer

    def get_queryset(self):
        objs = Location.objects.all()
        return objs
