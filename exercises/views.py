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

@api_view(['POST'])
def create_exercise(request):
    serializer = ExerciseSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def exercise_detail(request, pk):
    exercise = Exercise.objects.get(id=pk)
    serializer = ExerciseSerializer(exercise)
    return Response(serializer.data)

@api_view(['POST'])
def update_exercise(request, pk):
    exercise = Exercise.objects.get(id=pk)
    serializer = ExerciseSerializer(data=request.data, instance=exercise)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_exercise(request, pk):
    exercise = Exercise.objects.get(id=pk)
    exercise.delete()
    return Response('Exercise Deleted')