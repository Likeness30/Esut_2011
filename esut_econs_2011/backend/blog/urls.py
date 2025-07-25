from rest_framework.routers import DefaultRouter # type: ignore
from .views import BlogPostViewSet

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet, basename='blogpost')

urlpatterns = router.urls
