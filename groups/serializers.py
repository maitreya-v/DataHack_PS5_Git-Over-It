from rest_framework import serializers
from .models import *
from accounts.serializers import UserSerializer
from .models import Project, Invite

class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'


class CommunityUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(write_only=True)
    community = CommunitySerializer(read_only=True)
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = CommunityUser
        fields = ['id', 'user', 'community']  

class CommunityUserListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    community = CommunitySerializer(read_only=True)

    class Meta:
        model = CommunityUser
        fields = ['id','user', 'community']
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name' ,'users','skills_used','description' ]

class InviteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Invite
        fields = ['id', 'project', 'from_user', 'to_user', 'is_accepted']

class CreateInviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = ['project', 'to_user']