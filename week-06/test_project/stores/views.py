from django.shortcuts import render, get_object_or_404
from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from stores.models import Store, Product
from stores.serializers import StoreSerializer, ProductSerializer


class StoreView(RetrieveAPIView):
    serializer_class = StoreSerializer

    def get_object(self):
        return get_object_or_404(Store, id=self.kwargs['id'])


class StoresView(ListAPIView):
    serializer_class = StoreSerializer

    def get_queryset(self):
        return Store.objects.all()


class ProductView(RetrieveAPIView, UpdateAPIView):
    serializer_class = ProductSerializer

    def get_object(self):
        return get_object_or_404(Product, id=self.kwargs['id'])


class ProductsView(CreateAPIView, ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Product.objects.all()

