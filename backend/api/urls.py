
from rest_framework import routers
from django.urls import path, include
from api import views

router = routers.DefaultRouter()
router.register(r'todo', views.TodoViewSet)

urlpatterns = [
    path('todo/', views.todo_list),
    path('todo/<int:pk>/', views.todo_detail),
]