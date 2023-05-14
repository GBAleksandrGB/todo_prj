import json

from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIClient

from projects.models import Project, Todo
from users.models import ToDoUser


class TestApiClient(TestCase):
    client = APIClient()

    def test_get_detail_project(self):
        project = Project.objects.create(name='Test project',
                                         repo='test repository')
        response = self.client.get(path=f'/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestMixerTodo(TestCase):
    def test_get_detail_todo(self):
        todo = mixer.blend(Todo, project__name='Project1')
        admin = ToDoUser.objects.create_superuser('admin', 'admin@django.com', '123456')
        self.client.login(username='admin', password='123456')
        response = self.client.get(f'/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_todo = json.loads(response.content)
        self.assertEqual(response_todo['project'], 'Project1')
