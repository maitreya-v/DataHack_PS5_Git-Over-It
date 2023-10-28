from django.urls import path
from . import views

urlpatterns = [
    path('loc-post/', views.LocationPOSTAPI.as_view(), name = 'loc-post'),
    path('loc-get/', views.LocationGETAPI.as_view(), name = 'loc-get'),
]