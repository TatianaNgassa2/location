from django.contrib.gis.db import models

# Create your models here.
class Point(models.Model):
    nummaison = models.CharField()
    geom = models.PointField(null=True) # Spatial Field Types

    def __str__(self):
        return self.nummaison