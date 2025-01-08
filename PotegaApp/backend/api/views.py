from django.db import router
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Ex
from .serializers import ExSerializer


def getRoutes(request):

    routes = [
        {
            'Endpoint': '/exs/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of exs'
        },
        {
            'Endpoint': '/exs/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single ex object'
        },
        {
            'Endpoint': '/exs/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new ex with data sent in post request'
        },
        {
            'Endpoint': '/exs/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing ex with data sent in post request'
        },
        {
            'Endpoint': '/exs/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting ex'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getExs(request):
    exs = Ex.objects.all().order_by('-updated')
    serializer = ExSerializer(exs, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getEx(request, pk):
    exs = Ex.objects.get(id=pk)
    serializer = ExSerializer(exs, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateView(request, pk):
    try:
        ex = Ex.objects.get(id=pk)  
    except Ex.DoesNotExist:
        return Response({"error": "Ex not found"}, status=404) 

    data = request.data
    serializer = ExSerializer(instance=ex, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteView(request, pk):
    try:
        ex = Ex.objects.get(id=pk) 
        ex.delete()
        return Response(status=204)
    except Ex.DoesNotExist:
        return Response({"error": "Ex not found"}, status=404)
    
@api_view(['POST'])
def createView(request):
    data = request.data
    ex = Ex.objects.create(
        name=data.get('name', ''),
        weight=data.get('weight', ''),
        sets=data.get('sets', ''),
        reps=data.get('reps', ''),
    )
    serializer = ExSerializer(ex, many=False)
    return Response(serializer.data)

