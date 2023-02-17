from rest_framework import serializers

from stores.models import Store, Product


class StoreSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username')

    class Meta:
        model = Store
        fields = ['id', 'name', 'owner', 'description', 'email', 'url']


class ProductSerializer(serializers.ModelSerializer):
    store_info = StoreSerializer(source='store', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'store', 'store_info', 'name', 'price', 'picture']
