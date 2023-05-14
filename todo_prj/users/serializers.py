from rest_framework.serializers import HyperlinkedModelSerializer

from .models import ToDoUser


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class UserModelSerializerV2(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser']
