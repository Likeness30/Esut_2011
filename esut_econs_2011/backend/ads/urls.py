from rest_framework.routers import DefaultRouter # type: ignore
from .views import AdViewSet

router = DefaultRouter()
router.register(r'ads', AdViewSet, basename='ad')

urlpatterns = router.urls
