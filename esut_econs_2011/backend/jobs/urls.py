from rest_framework.routers import DefaultRouter # type: ignore
from .views import JobViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='job')

urlpatterns = router.urls
