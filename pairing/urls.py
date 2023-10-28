from django.urls import path
from . import views

urlpatterns = [
    path('trip-detail-post/', views.TripDetailPOSTAPI.as_view(), name = 'trip-detail-post'),
    path('trip-detail-get/', views.TripDetailGETAPI.as_view(), name = 'trip-detail-get'),
    path('user-detail/', views.UserDetailAPI.as_view(), name = 'user-detail'),
    path('cluster/<int:pk>', views.TripDetailClusterAPI.as_view(), name = 'cluster'),
    path('user-detail-email/', views.UserDetailClusterAPI.as_view(), name = 'user-detail-email'),
]