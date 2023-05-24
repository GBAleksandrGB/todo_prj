from rest_framework import serializers

from users.models import ToDoUser
from .models import Project, Todo


class ProjectModelSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(queryset=ToDoUser.objects.all(), slug_field='username')
    project = serializers.SlugRelatedField(queryset=Project.objects.all(), slug_field='name')

    class Meta:
        model = Todo
        fields = '__all__'
