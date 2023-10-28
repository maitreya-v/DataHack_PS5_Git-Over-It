from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=100, blank=True)
    location_name = models.CharField(max_length=100, blank=True)
    latitude = models.DecimalField(blank=True, null=True, max_digits=20, decimal_places=10)
    longitude = models.DecimalField(blank=True, null=True, max_digits=20, decimal_places=10)
    description = models.CharField(max_length=200, blank=True)