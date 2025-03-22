from django.urls import path, include
from rest_framework import routers
from login import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'ingreso', views.UserViewSet, 'usuario')

urlpatterns = [
    path("login/", include(router.urls)),
    path("login/docs/", include_docs_urls(title="Usuarios API"), name="login-docs")
]