from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.decorators import action


# Create your views here.

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        id = self.request.query_params.get('id')
        category = self.request.query_params.get('category')

        if id:
            queryset = queryset.filter(id=id)

        if category:
            queryset = queryset.filter(category=category)

        return queryset
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.GET.get('q', '')
        productos = Product.objects.filter(
            Q(title__icontains=query) | Q(description__icontains=query)
        )[:10]
        serializer = ProductSerializer(productos, many=True)
        return Response({"productos": serializer.data})
