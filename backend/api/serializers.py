from api.models import Todo
from rest_framework import serializers

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['task', 'completed']