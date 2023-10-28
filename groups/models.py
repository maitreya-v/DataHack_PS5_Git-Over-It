from django.db import models
from accounts.models import User
from django.conf import settings

class Community(models.Model):
    project = models.CharField(max_length=50)
    # start_date = models.DateField(blank=True, null=True)
    # end_date = models.DateField(blank=True, null=True)


class CommunityUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    
class Project(models.Model):
    name = models.CharField(max_length=255)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL)
    skills_used=models.CharField(max_length=9999,blank=True)
    description=models.CharField(max_length=9999,blank=True)
    

class Invite(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    from_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sent_invites')
    to_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='received_invites')
    is_accepted = models.BooleanField(default=False)