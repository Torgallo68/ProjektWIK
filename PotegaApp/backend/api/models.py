from django.db import models

class Ex(models.Model):
    name = models.CharField(max_length=100, default="Brak nazwy")  
    weight = models.FloatField(default=0.0)  
    sets = models.IntegerField(default=0)  
    reps = models.IntegerField(default=0)  
    updated = models.DateTimeField(auto_now=True) 
    created = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.name 
