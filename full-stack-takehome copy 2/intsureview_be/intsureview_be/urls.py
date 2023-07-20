"""intsureview_be URL Configuration"""

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.urls import re_path, include

#updated urls to include burger urls

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(r'^',include('Burger.urls'))
]

router = routers.DefaultRouter()
#router.register(r"users", views.UserViewSet)
#router.register(r"groups", views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    re_path(r'^',include('Burger.urls'))
]
