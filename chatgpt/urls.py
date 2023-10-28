from django.urls import path
from . import views

urlpatterns = [
    path('itinerary/', views.ChatgptAPI.as_view(), name = 'itinerary'),
]