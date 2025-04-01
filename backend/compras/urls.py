from django.urls import path, include
from rest_framework import routers
from compras import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'compras', views.CompraView, 'compras')

urlpatterns = [
    path("set/", include(router.urls)),
    path("set/shop/", views.post_carrito, name="compras-shop"),
    path("compras/docs/", include_docs_urls(title="Compras MasterMarket"), name="compras-docs"),
]