from django.contrib import admin
from .models import ExerciseBlock, Workout, Set

# Register your models here.
admin.site.register(Workout)
admin.site.register(ExerciseBlock)
admin.site.register(Set)