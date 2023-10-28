from django.shortcuts import render
from .serializers import *
from .models import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework import generics
from .models import Project, Invite
from .serializers import ProjectSerializer, InviteSerializer, CreateInviteSerializer
from django.contrib.auth import get_user_model
# Create your views here.
class CommunityPostAPI(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CommunitySerializer

    def post(self, request):
        user = User.objects.get(email = request.user.email)
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            community = serializer.create(serializer.validated_data)
            communityuser_obj = CommunityUser.objects.create(user = user, community = community)
            return JsonResponse({"message": "success", "data": request.data}, status= status.HTTP_201_CREATED)
        else:
            return JsonResponse({"message":"data not valid"}, status=status.HTTP_400_BAD_REQUEST)

    
class CommunityListAPI(ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CommunitySerializer
    queryset = Community.objects.all()


class CommunityUserPostAPI(GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CommunityUserSerializer

    def post(self, request):
        user = User.objects.get(email = request.user.email)
        print(user)
        serializer = self.serializer_class(data = request.data)
        print(serializer)
        if serializer.is_valid():
            community = Community.objects.get(id=request.data['id'])
            print(community)
            communityuser, created = CommunityUser.objects.get_or_create(user = user, community=community)
            print(communityuser)
            if created:
                return JsonResponse({"message": "success", "user": communityuser.user.email, "community":communityuser.community.location}, status= status.HTTP_201_CREATED)
            else: 
                return JsonResponse({"message":"User is already a part of the community"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({"message":"data not valid"}, status=status.HTTP_400_BAD_REQUEST)


class CommunityUserListAPI(ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CommunityUserListSerializer

    def get_queryset(self):
        id=self.kwargs.get('id')
        community = Community.objects.get(id=id)
        queryset = CommunityUser.objects.filter(community=community)
        return queryset

class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectUsersView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        project = Project.objects.get(pk=self.kwargs['pk'])
        return project.users.all()

class ProjectInviteView(generics.ListCreateAPIView):
    serializer_class = InviteSerializer

    def get_queryset(self):
        project = Project.objects.get(pk=self.kwargs['pk'])
        return Invite.objects.filter(project=project)

    def perform_create(self, serializer):
        project = Project.objects.get(pk=self.kwargs['pk'])
        User = get_user_model()

        from_user = User.objects.get(email=self.request.data['from_user'])
        to_user = User.objects.get(email=self.request.data['to_user'])

        serializer.save(from_user=from_user, to_user=to_user, project=project)

class InviteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Invite.objects.all()
    serializer_class = InviteSerializer

    def perform_update(self, serializer):
        serializer.save(is_accepted=True)
        invite = serializer.instance
        project = invite.project
        project.users.add(invite.to_user)