from rest_framework.viewsets import ModelViewSet

from .models import ToDoUser
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = ToDoUser.objects.all()
    serializer_class = UserModelSerializer
