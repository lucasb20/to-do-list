from django.test import TestCase
from rest_framework.test import APIRequestFactory

# Create your tests here.

class Testing_CRUD(TestCase):
    factory = APIRequestFactory()
    base = '/api/todo'

    def Testing_POST(self):
        data = {'task': 'Uma tarefa qualquer.'}
        request = self.factory.post(self.base, data)
        assert request.method == 'POST'