from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

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