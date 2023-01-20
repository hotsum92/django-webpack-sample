from django.conf.urls import url
from . import views

urlpatterns = [
    url('a', views.index_a, name='index_a'),
    url('b', views.index_b, name='index_b'),
    url('memo', views.index_memo, name='index_memo'),
]
