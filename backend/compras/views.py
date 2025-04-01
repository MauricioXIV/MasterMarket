from rest_framework import viewsets
from .serializer import CompraSerializer, ItemCompraSerializer
from .models import ItemCompra
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class CompraView(viewsets.ModelViewSet):
    serializer_class = ItemCompraSerializer  
    permission_classes = [IsAuthenticated]

    def get_queryset(self):  
        return ItemCompra.objects.filter(compra__user=self.request.user) 

@api_view(['POST'])
@ensure_csrf_cookie
def post_carrito(request):
    if request.method == 'POST':
        serializer = CompraSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        print(serializer.errors)
        return Response(serializer.errors, status=400)