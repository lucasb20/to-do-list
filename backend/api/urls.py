
from django.urls import path, include
from api import views

urlpatterns = [
    path('detail/<int:pk>/', views.get_todo),
    path('', views.get_todos),
    path('create/', views.post_todo),
    path('update/<int:pk>', views.put_todo),
    path('delete/<int:pk>', views.delete_todo),
]