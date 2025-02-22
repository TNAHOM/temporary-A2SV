from django.db import models

class BasicInformation(models.Model):
    country = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    zone = models.CharField(max_length=100)
    woreda = models.CharField(max_length=100)
    kebele = models.CharField(max_length=100)
    nearest_health_facility = models.CharField(max_length=100)
    data_collector_name = models.CharField(max_length=100)
    data_collector_phone_number = models.CharField(max_length=20)
    house_number = models.CharField(max_length=20)
    head_of_household_name = models.CharField(max_length=100)
    head_of_household_phone_number = models.CharField(max_length=20)
    location = models.TextField()  
    surveyor = models.TextField()  
    submission_date = models.DateField(auto_now_add=True)