from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Burger.models import Burger
from Burger.serializers import BurgerSerializer

# Create your views here.

@csrf_exempt
def burgerApi(request,id=0):
    if request.method=='POST':
        burger_data=JSONParser().parse(request)
        burger_serializer=BurgerSerializer(data=burger_data)
        if burger_serializer.is_valid():
            burger_serializer.save()
            return JsonResponse("Burger Submitted Successfully!", safe=False)
        return JsonResponse("An error occurred, please try again.", safe=False)
        #Send the response back to the frontend as a json file so that it can be displayed to the user.