from django.shortcuts import render
from .serializers import *
from .models import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView
from .utils import *


class TripDetailPOSTAPI(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TripDetailSerializer

    def post(self, request):
        user = User.objects.get(email = request.user.email)
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            valid_data = serializer.create(serializer.validated_data, user)
            return JsonResponse({"message": "success", "data": valid_data}, status= status.HTTP_201_CREATED)
        else:
            return JsonResponse({"message":"data not valid"}, status=status.HTTP_400_BAD_REQUEST)


class TripDetailGETAPI(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TripDetailSerializer

    def get_queryset(self):
        objs = TripDetail.objects.filter(user = self.request.user)
        return objs


class UserDetailAPI(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserDetailSerializer

    def post(self, request):
        user = User.objects.get(email = request.user.email)
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            valid_data = serializer.create(serializer.validated_data, user)
            return JsonResponse({"message": "success", "data": valid_data}, status= status.HTTP_201_CREATED)
        else:
            return JsonResponse({"message":"data not valid"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        try:
            obj = UserDetail.objects.get(user = request.user)
            serializer = self.serializer_class(obj)
            data = serializer.data
            return JsonResponse({"message": "success", "data": data}, status=status.HTTP_200_OK)
        except: 
            return JsonResponse({"message":"user details not filled"}, status=status.HTTP_404_NOT_FOUND)


class TripDetailClusterAPI(ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TripDetailClusterSerializer

    def get_queryset(self):
        id=self.kwargs.get('pk')
        cluster1 = cluster(id)
        print(cluster1)
        return TripDetail.objects.filter(cluster = cluster1).exclude(id=id)


class UserDetailClusterAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserDetailClusterSerializer

    def post(self, request):
        email = request.data['email']
        user = User.objects.get(email=email)
        user_det = UserDetail.objects.get(user = user)
        serializer = self.serializer_class(user_det)
        data = serializer.data
        return JsonResponse({"message": "success", "data": data}, status=status.HTTP_200_OK)