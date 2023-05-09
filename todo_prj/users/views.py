from rest_framework.generics import ListAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin

from .models import ToDoUser
from .serializers import UserModelSerializer


class UserPagination(LimitOffsetPagination):
    default_limit = 3


class UserKwargsFilterView(ListAPIView):
    serializer_class = UserModelSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return ToDoUser.objects.filter(username__contains=username)


class UserMixinViewSet(UpdateModelMixin, ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = ToDoUser.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = UserPagination
