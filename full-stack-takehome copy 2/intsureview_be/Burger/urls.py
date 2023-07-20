from django.urls import re_path
from Burger import views

urlpatterns=[
    re_path(r'burger$',views.burgerApi)
]