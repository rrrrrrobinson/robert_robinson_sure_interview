from django.db import models

# Create your models here.

#Create the burger app model, include generous max length prop for optional ingredients
#Allow blank fields for no selection
class Burger(models.Model):
    patty = models.CharField(max_length=20, default="", blank=True)
    firstIngredient = models.CharField(max_length=25, default="", blank=True)
    secondIngredient = models.CharField(max_length=25, default="", blank=True)
    thirdIngredient = models.CharField(max_length=25, default="", blank=True)
    fourthIngredient = models.CharField(max_length=25, default="", blank=True)
    lettuce = models.CharField(max_length=10, default="", blank=True)
    tomato = models.CharField(max_length=10, default="", blank=True)
    onion = models.CharField(max_length=10, default="", blank=True)
