from django.db import models
from django.utils import timezone

from users.models import ToDoUser


class Project(models.Model):
    name = models.CharField(max_length=100)
    repo = models.URLField(max_length=200)
    users = models.ManyToManyField(ToDoUser)

    def __str__(self):
        return self.name


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(default=timezone.now().isoformat('|', 'seconds'))
    updated_at = models.DateTimeField(default=timezone.now().isoformat('|', 'seconds'))
    author = models.ForeignKey(ToDoUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.project
