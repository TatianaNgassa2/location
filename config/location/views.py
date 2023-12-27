from django.shortcuts import render
from location.models import Point
from rest_framework.response import Response
from rest_framework import status
from location.serializers import PointSerializer
from rest_framework.views import APIView
# Create your views here.

class PointList(APIView):
    """
    List all points or create a new point.
    """
    def get(self, request, format=None):
        points= Point.objects.all()
        serializer = PointSerializer(points, many=True)
        return Response({"count":len(points),"data":serializer.data})

    def post(self, request, format=None):
        serializer = PointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
