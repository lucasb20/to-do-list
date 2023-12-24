
from rest_framework import routers
from django.urls import path, include
from api import views

router = routers.DefaultRouter()
router.register(r'todo', views.TodoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns+=router.urls