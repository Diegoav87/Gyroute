from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer

# Create your views here.
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'Registration successful'
            data['username'] = user.username
            data['email'] = user.email
        else:
            data = serializer.errors

    return Response(data)

