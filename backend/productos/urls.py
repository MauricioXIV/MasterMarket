from django.urls import path, include
from rest_framework import routers
from productos import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'productos', views.ProductView, 'productos')

urlpatterns = [
    path("set/", include(router.urls)),
    path("productos/docs/", include_docs_urls(title="Productos MercadoPreso"), name="productos-docs")
]