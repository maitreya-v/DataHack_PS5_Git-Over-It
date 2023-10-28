from rest_framework.generics import GenericAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from django.contrib.auth import authenticate,login
from rest_framework.response import Response
from rest_framework import status,permissions
from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Utkarsh Verma
# lionking1081
#mvaghulade@gmail.com
# Create your views here.

#twilio account
#password=maitreyavaghulade1235
#twilio account

class UserRegisterAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserRegisterSerializer
    
    def post(self,request,*args,**kwargs):
        data = request.data
        print(data)
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        print(user)
        token = Token.objects.create(user=user)
        return Response({"response":"Successfully created", "token":token.key}, status=status.HTTP_201_CREATED)


class LoginAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer
	
    def post(self,request,*args,**kwargs ):
        email = request.data.get('email',None)
        password = request.data.get('password',None)
        user = authenticate(email = email, password = password)
        if user :
            login(request,user)
            serializer = self.serializer_class(user)
            token = Token.objects.get(user=user)
            return Response({"response":"Success", "token":token.key},status = status.HTTP_200_OK)
        else:   
            return Response({"response":'Invalid Credentials'},status = status.HTTP_404_NOT_FOUND)

class UserGetAPI(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            user = User.objects.get(email = request.user.email)
            serializer = self.serializer_class(user)
        except:
            return Response("User not found", status= status.HTTP_404_NOT_FOUND)
        return Response(serializer.data, status= status.HTTP_200_OK)

    def put(self,request,*args,**kwargs):
        user = User.objects.get(email=request.user.email)
        data = request.data
        if user.email != data['email']:
            user.delete()
            user = User.objects.create_user(data['email'], data['password'])
            token = Token.objects.create(user=user)
        serializer = self.serializer_class(data=data)
        user = serializer.update(request.data, user)
        return Response(request.data, status = status.HTTP_200_OK)



class TodoListView(generics.ListCreateAPIView):
    serializer_class = TodoSerializer

    def get_queryset(self):
     user = self.request.user
     return Todo.objects.filter(packing_user=user)

    def perform_create(self, serializer):
     serializer.save(packing_user=self.request.user)
        
# class UserDetail(generics.RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserPackingTodoSerializer

#     def get_object(self):
#         return self.request.user


class TodoListDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(packing_user=user)
    