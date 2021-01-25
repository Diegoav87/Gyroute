from django.db import models
from exercises.models import Exercise

# Create your models here.
class Workout(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class ExerciseBlock(models.Model):
    exercise = models.OneToOneField(Exercise, on_delete=models.CASCADE)
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='exercises')

    def __str__(self):
        return self.exercise.name
    

class Set(models.Model):
    weight = models.IntegerField()
    reps = models.IntegerField()
    number = models.IntegerField()
    exercise_block = models.ForeignKey(ExerciseBlock, on_delete=models.CASCADE, related_name='sets')

    def __str__(self):
        return str(self.number)
    
    


