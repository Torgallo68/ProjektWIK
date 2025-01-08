from rest_framework.serializers import ModelSerializer
from .models import Ex

class ExSerializer(ModelSerializer):
    class Meta:
        model = Ex
        fields = '__all__'