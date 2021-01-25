from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('workout-list/', views.workout_list, name='workout-list'),
    path('workout-detail/<str:pk>/', views.workout_detail, name='workout-detail'),
    path('workout-create/', views.create_workout, name='workout-create'),
    path('workout-update/<str:pk>/', views.update_workout, name='workout-update'),
    path('workout-delete/<str:pk>/', views.delete_workout, name='workout-delete'),
]