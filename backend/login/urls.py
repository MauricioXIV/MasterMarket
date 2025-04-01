from django.urls import path, include
from rest_framework import routers
from login import views
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse

router = routers.DefaultRouter()
router.register(r'ingreso', views.UserViewSet, 'usuario')


@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({"detail": "CSRF cookie set"})


urlpatterns = [
    path('csrf/', csrf, name='csrf'),
    path("login/", include(router.urls)),
    path('login/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/user/profile/', views.get_user_profile, name='user-profile'),
    path('login/user/profile/editar/', views.update_profile, name='update-profile'),
    path("login/docs/", include_docs_urls(title="Usuarios API"), name="login-docs"),
]