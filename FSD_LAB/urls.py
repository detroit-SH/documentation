
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('home/',views.home,name="home"),
    path('layout/',views.layout,name="layout"),
    path('code1/',views.code1,name="code1"),
    path('code2/',views.code2,name="code2"),
    path('code3/',views.code3,name="code3"),
    path('code4/',views.code4,name="code4"),
    path('code5/',views.code5,name="code5"),
    path('code6/',views.code6,name="code6"),
    path('code6/',views.code6,name="code6"),
    path('code7&8/',views.code7and8,name="code7and8"),
    path('code9/',views.code9,name="code9"),
    path('code10/',views.code10,name="code10"),
    path('test/',views.test,name="test"),
    path('ack/',views.ack,name="ack"),
    path('me/',views.me,name="me"),
    # path('about/',views.about,name="about"),
]
