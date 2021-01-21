import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gyroute.settings')

import django
django.setup()

from exercises.models import Exercise
import requests
import json

url = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=227"
response = requests.get(url).json()

def add_exercise(exercise):
    exercise = Exercise.objects.get_or_create(name=exercise['name'], description=exercise['description'], category=exercise['category']['name'])[0]
    exercise.save()

def populate():
    for exercise in response['results']:
        add_exercise(exercise)

if __name__ == '__main__':
    print('Populating...')
    populate()
    print('Population completed')