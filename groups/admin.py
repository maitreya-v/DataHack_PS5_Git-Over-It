from django.contrib import admin
from .models import *
# Register your models here.

class CommunityAdmin(admin.ModelAdmin):
    model = Community
    # list_display = ['location', 'start_date', 'end_date']
    # list_filter = ['location', 'start_date', 'end_date']
    # fields = ['location', 'start_date', 'end_date']

    # search_fields = ['location', 'start_date', 'end_date']
    # ordering = ['location', 'start_date', 'end_date']
    # filter_horizontal = ()


class CommunityUserAdmin(admin.ModelAdmin):
    model = CommunityUser
    
class ProjectAdmin(admin.ModelAdmin):
    model=Project
    
class InviteAdmin(admin.ModelAdmin):
    model=Invite
    # list_display = ['user', 'community']
    # list_filter = ['user', 'community']
    # fields = ['user', 'community']

    # search_fields = ['user', 'community']
    # ordering = ['user', 'community']
    # filter_horizontal = ()


admin.site.register(CommunityUser, CommunityUserAdmin)
admin.site.register(Community, CommunityAdmin)
admin.site.register(Project,ProjectAdmin)
admin.site.register(Invite,InviteAdmin)