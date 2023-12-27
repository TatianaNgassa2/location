from location.models import Point
from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer

class PointSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Point
        geo_field ="geom"
        fields = '__all__'

        extra_kwargs = {"geom": {"read_only": True}}