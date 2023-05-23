from rest_framework.generics import ListAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin

from .models import ToDoUser
from .serializers import UserModelSerializer, UserModelSerializerV2


class UserPagination(LimitOffsetPagination):
    default_limit = 5


class UserKwargsFilterView(ListAPIView):
    serializer_class = UserModelSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return ToDoUser.objects.filter(username__contains=username)


class UserMixinViewSet(UpdateModelMixin, ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = ToDoUser.objects.all()
    pagination_class = UserPagination
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserModelSerializerV2
        return UserModelSerializer
