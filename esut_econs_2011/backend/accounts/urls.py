from rest_framework.routers import DefaultRouter # type: ignore
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = router.urls
