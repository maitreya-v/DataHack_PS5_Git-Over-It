from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Git Over It API",
      default_version='v1',
      description="Datathon, Git Over It",
      terms_of_service="https://www.google.com/policies/terms/",
      #contact=openapi.Contact(email="contact@snippets.local"),
      #license=openapi.License(name="License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('pairing/', include('pairing.urls')),
    path('location/', include('location.urls')),
    path('chatgpt/', include('chatgpt.urls')),
    path('scraper/', include('scraper.urls')),
    path('groups/', include('groups.urls')),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)