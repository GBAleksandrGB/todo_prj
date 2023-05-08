from django.core.management import BaseCommand

from projects.models import Project, Todo
from users.models import ToDoUser
from projects.serializers import ProjectModelSerializer, TodoModelSerializer
from users.serializers import UserModelSerializer


class Command(BaseCommand):
    help = 'Adds test projects and todos to the database'

    def handle(self, *args, **options):
        Project.objects.all().delete()

        user1 = ToDoUser.objects.get(username='dim')
        user2 = ToDoUser.objects.get(username='mongol')
        user_serializer1 = UserModelSerializer(user1)
        print(user_serializer1.data)
        user_serializer2 = UserModelSerializer(user2)
        print(user_serializer2.data)

        project1 = Project.objects.create(name='Project1',
                                          repo='This is project1')
        project1.users.add(user1)
        project1.users.add(user2)
        project1.save()
        project_serializer1 = ProjectModelSerializer(project1)
        print(project_serializer1.data)

        todo1 = Todo.objects.create(project=project1,
                                    content='This is content for todo1',
                                    author=user1)
        todo_serializer1 = TodoModelSerializer(todo1)
        print(todo_serializer1.data)
        todo2 = Todo.objects.create(project=project1,
                                    content='This is another content',
                                    author=user2)
        todo_serializer2 = TodoModelSerializer(todo2)
        print(todo_serializer2.data)
