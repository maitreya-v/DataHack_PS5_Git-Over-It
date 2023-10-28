from rest_framework import serializers
from .models import *
from accounts.serializers import UserSerializer

class TripDetailSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    cluster = serializers.IntegerField(read_only=True)
    class Meta:
        model = TripDetail
        fields = ['id', 'user', 'origin_loc', 'destination', 'start_date', 'end_date', 'transport', 'company', 'trip_type', 'budget', 'cluster']

    def create(self, validated_data, user):
        TripDetail.objects.create(user = user, **validated_data)
        return validated_data


class UserDetailSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    class Meta:
        model = UserDetail
        fields = ['user', 'food_pref', 'dob', 'sex']

    def create(self, validated_data, user):
        UserDetail.objects.create(user = user, **validated_data)
        return validated_data


class TripDetailClusterSerializer(serializers.ModelSerializer):

    class Meta:
        model = TripDetail
        fields = '__all__'


class UserDetailClusterSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    food_pref = serializers.CharField(read_only=True)
    dob = serializers.DateField(read_only=True)
    sex = serializers.CharField(read_only=True)
    email = serializers.CharField(write_only=True)

    class Meta:
        model = UserDetail
        fields = ['user', 'food_pref', 'dob', 'sex', 'email']
