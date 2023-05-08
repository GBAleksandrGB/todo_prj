from django.db import models
from django.contrib.auth.models import AbstractUser


class ToDoUser(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
