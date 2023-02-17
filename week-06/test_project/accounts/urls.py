from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from accounts.views import hello, LoginView, SignupView

urlpatterns = [
    path('hello/<str:name>/', hello),
    path('signup/', SignupView.as_view()),
    path('login/', LoginView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]
