from rest_framework import serializers
from .models import Workout, Set, ExerciseBlock

class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = ('weight', 'reps', 'number')

class ExerciseBlockSerializer(serializers.ModelSerializer):
    sets = SetSerializer(many=True)

    class Meta:
        model = ExerciseBlock
        fields = ('exercise', 'sets')

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = ExerciseBlockSerializer(many=True)

    class Meta:
        model = Workout
        fields = ('id', 'name', 'exercises')