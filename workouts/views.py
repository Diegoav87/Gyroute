from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import WorkoutSerializer, SetSerializer, ExerciseBlockSerializer
from django.contrib.auth.models import User
from .models import Workout, Set, ExerciseBlock

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/workout-list/',
        'Detail View': '/workout-detail/<str:pk>/',
        'Create': '/workout-create/',
        'Update': '/workout-update/<str:pk/',
        'Delete': '/workout-delete/<str:pk/',
    }

    return Response(api_urls)

@api_view(['GET'])
def workout_list(request):
    workouts = Workout.objects.all()
    serializer = WorkoutSerializer(workouts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_workout(request):
    serializer = WorkoutSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def workout_detail(request, pk):
    workout = Workout.objects.get(id=pk)
    serializer = WorkoutSerializer(workout)
    return Response(serializer.data)

@api_view(['POST'])
def update_workout(request, pk):
    workout = Workout.objects.get(id=pk)
    serializer = WorkoutSerializer(data=request.data, instance=workout)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_workout(request, pk):
    workout = Workout.objects.get(id=pk)
    workout.delete()
    return Response('workout Deleted')
