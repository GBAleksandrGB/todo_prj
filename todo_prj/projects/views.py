from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination

from .serializers import ProjectModelSerializer, TodoModelSerializer
from .models import Project, Todo
from .filters import ProjectFilter, TodoFilter


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10


class TodoPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    parser_classes = [JSONParser]
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    parser_classes = [JSONParser]
    serializer_class = TodoModelSerializer
    pagination_class = TodoPagination
    filterset_class = TodoFilter
