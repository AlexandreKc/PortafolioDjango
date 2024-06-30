from django.db import models
from .utils import encrypt_message,decrypt_message
# Create your models here.


#modelos para categorias de los proyectos
class Categoria(models.Model) :
    nombre = models.CharField(max_length=100, unique=True);

    def __str__(self):
        return self.nombre;


#modelos para las tecnologias utilizadas en los proyectos
class Tecnologias(models.Model):
    nombre= models.CharField(max_length=50, unique=True);

    def __str__(self):
        return self.nombre;
#Modelo para los proyectos del portafolio
class Proyecto(models.Model):
    titulo = models.CharField(max_length=200);
    imagen= models.ImageField(upload_to='proyectos/');
    descripcion= models.TextField();
    tecnologias= models.ManyToManyField(Tecnologias);
    link_sitio= models.URLField(max_length=200);
    categoria= models.ForeignKey(Categoria,on_delete=models.CASCADE);

    def __str__(self):
        return self.titulo;


class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

