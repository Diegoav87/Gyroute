from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from decouple import config
from .models import Exercise
from .serializers import ExerciseSerializer

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/exercise-list/',
        'Detail View': '/exercise-detail/<str:pk>/',
        'Create': '/exercise-create/',
        'Update': '/exercise-update/<str:pk/',
        'Delete': '/exercise-delete/<str:pk/',
    }

    return Response(api_urls)

@api_view(['GET'])
def exercise_list(request):
    exercises = Exercise.objects.all().order_by('name')
    serializer = ExerciseSerializer(exercises, many=True)
    return Response(serializer.data)