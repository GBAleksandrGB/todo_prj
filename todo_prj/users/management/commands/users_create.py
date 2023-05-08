from django.core.management.base import BaseCommand

from users.models import ToDoUser

USERS = [{'username': 'mongol', 'email': 'mongol@django.com', 'password': '124',
          'first_name': 'Fedor', 'last_name': 'Jashin'},
         {'username': 'dim', 'email': 'dim@django.com', 'password': '125',
          'first_name': 'Slava', 'last_name': 'Popov'},
         {'username': 'hacker', 'email': 'hacker@django.com', 'password': '126',
          'first_name': 'Ivan', 'last_name': 'Ivanov'}]


class Command(BaseCommand):
    help = 'Adds test users to the database and creates a superuser'

    def handle(self, *args, **options):
        ToDoUser.objects.all().delete()

        ToDoUser.objects.create_superuser(username='admin',
                                          email='admin@django.com',
                                          password='123')

        for user in USERS:
            ToDoUser.objects.create_user(username=user.get('username'),
                                         email=user.get('email'),
                                         password=user.get('password'),
                                         first_name=user.get('first_name', ''),
                                         last_name=user.get('last_name', ''))

        self.stdout.write(self.style.SUCCESS('Successfully create users'))
