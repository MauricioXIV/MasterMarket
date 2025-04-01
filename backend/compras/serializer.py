from rest_framework import serializers
from .models import Compra, ItemCompra
from django.utils import timezone

class ItemCompraSerializer(serializers.ModelSerializer):
    fecha_compra = serializers.SerializerMethodField()

    class Meta:
        model = ItemCompra
        fields = ['id', 'title', 'description', 'category', 'price', 'stock', 'image', 'fecha_compra']

    def get_fecha_compra(self, obj):
        fecha = timezone.localtime(obj.compra.fecha)
        return fecha.strftime('%Y/%m/%d')
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

class CompraSerializer(serializers.ModelSerializer):
    items = ItemCompraSerializer(many=True, required=True, write_only=True)
    
    class Meta:
        model = Compra
        fields = ['id', 'user', 'fecha', 'total', 'items']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        compra = Compra.objects.create(**validated_data)

        for item_data in items_data:
            ItemCompra.objects.create(compra=compra, **item_data)
        return compra