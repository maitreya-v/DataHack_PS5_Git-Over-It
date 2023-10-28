from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegisterAPI.as_view(), name = 'registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('user/', views.UserGetAPI.as_view(), name = 'user-data'),
    path('todos/', views.TodoListView.as_view(), name='todo_list'),
    path('todos/<int:pk>', views.TodoListDetail.as_view(), name='todo_detail'),    
    # path('todos/<int:pk>', views.TodoListDetail.as_view(), name='todo_detail'),    
]