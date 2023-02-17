from django.contrib.auth.models import User
from django.db import models
from django.db.models import SET_NULL


class Store(models.Model):
    owner = models.ForeignKey(to=User, related_name='stores', on_delete=SET_NULL, null=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField()
    email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    store = models.ForeignKey(to=Store, null=True, on_delete=SET_NULL,
                              related_name='products')
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField(default=0)
    picture = models.ImageField(upload_to='product_pictures/', null=True, blank=True)

    def __str__(self):
        return self.name + " from " + str(self.store)
