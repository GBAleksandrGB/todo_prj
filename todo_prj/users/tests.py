import requests
from django.test import TestCase
from requests.auth import HTTPBasicAuth
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APISimpleTestCase, RequestsClient

from .models import ToDoUser
from .views import UserMixinViewSet


class TestUserViewSet(TestCase):
    factory = APIRequestFactory()

    def test_get_users_list(self):
        request = self.factory.get('/users/')
        view = UserMixinViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_auth_user(self):
        request = self.factory.post('/users/',
                                    {'username': 'test'},
                                    format='json')
        admin = ToDoUser.objects.create_superuser('admin', 'test@django.com', 'test')
        force_authenticate(request, admin)
        view = UserMixinViewSet.as_view({'post': 'update'})
        response = view(request, pk=1, partial=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestPostToken(APISimpleTestCase):
    def test_post_token(self):
        response = requests.post(url='http://127.0.0.1:8000/api-token-auth/',
                                 data={'username': 'admin', 'password': '123'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
