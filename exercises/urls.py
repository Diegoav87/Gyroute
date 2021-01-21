from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('exercise-list/', views.exercise_list, name='exercise-list'),
    # path('exercise-detail/<str:pk>/', views.exercise_detail, name='exercise-detail'),
    # path('exercise-create/', views.create_exercise, name='exercise-create'),
    # path('exercise-update/<str:pk>/', views.update_exercise, name='exercise-update'),
    # path('exercise-delete/<str:pk>/', views.delete_exercise, name='exercise-delete'),
]