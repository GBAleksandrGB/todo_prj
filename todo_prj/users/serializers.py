from rest_framework.serializers import HyperlinkedModelSerializer

from .models import ToDoUser


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ['username', 'first_name', 'last_name', 'email']
