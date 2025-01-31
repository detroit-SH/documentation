

from django.urls import path,include
from . import views
urlpatterns = [
    path('T2W/',views.T2W,name="T2W"),
    path('We/',views.We,name="We"),
    path('generate/', views.generate_webpage, name='generate_webpage'),
    path('download_zip/', views.download_zip, name='download_zip'),  # Route for ZIP download
]
