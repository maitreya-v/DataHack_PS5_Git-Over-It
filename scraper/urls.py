from django.urls import path
from . import views

urlpatterns = [
    path('hotel/', views.HotelScraperAPI.as_view(), name = 'hotel-scraper'),
    path('attraction/', views.AttractionsScraperAPI.as_view(), name = 'attraction-scraper'),
]