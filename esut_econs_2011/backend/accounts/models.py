from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    reg_number = models.CharField(max_length=50, unique=True)
    nickname = models.CharField(max_length=50, blank=True)
    dob = models.DateField(null=True, blank=True)
    address = models.TextField(blank=True)
    residential_base = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    reference_name = models.CharField(max_length=100, blank=True)
    reference_number = models.CharField(max_length=20, blank=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)

