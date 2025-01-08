from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('exs/', views.getExs, name="exs"),
    path('exs/create/', views.createView, name="ex-create"),
    path('exs/<str:pk>/update/', views.updateView, name="ex-update"),
    path('exs/<str:pk>/delete/', views.deleteView, name="ex-delete"),
    path('exs/<str:pk>/', views.getEx, name="ex"),
    
]
