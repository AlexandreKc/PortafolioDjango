from django.urls import path
from django.contrib import admin
from . import views
urlpatterns = [
    path('',views.home, name='home'),
    path('contactos', views.Contacto, name='contactos'),
    path('admin/', admin.site.urls),
    path('API_1',views.api, name='API'),
    path('login',views.login, name='login'),
    path('contacto/nuevo/', views.contacto_nuevo, name='contacto_nuevo'),
    path('contacto/<int:pk>/', views.contacto_detalle, name='contacto_detalle'),
    path('contacto/<int:pk>/editar/', views.contacto_editar, name='contacto_editar'),
    path('contacto/<int:pk>/eliminar/', views.contacto_eliminar, name='contacto_eliminar'),
    path('contactos/', views.contacto_lista, name='contacto_lista'),
    path('contacto/confirmacion/', views.contacto_confirmacion, name='contacto_confirmacion'),
    path('vista_protegida/', views.vista_protegida, name='vista_protegida'),
    path('proyecto/<int:pk>/', views.proyecto_detalle, name='proyecto_detalle'),
]
