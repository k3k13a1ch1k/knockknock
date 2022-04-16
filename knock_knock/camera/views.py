from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import Article
from .serializers import ArticleModelSerializer


class ArticleAPIView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleModelSerializer