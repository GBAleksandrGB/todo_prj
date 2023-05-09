from rest_framework import serializers

from .models import Project, Todo


class ProjectModelSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(serializers.ModelSerializer):
    project = serializers.StringRelatedField()
    author = serializers.StringRelatedField()

    class Meta:
        model = Todo
        fields = '__all__'
