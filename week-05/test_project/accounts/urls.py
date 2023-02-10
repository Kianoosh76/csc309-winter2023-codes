from django.urls import path

from accounts.views import hello, LoginView, SignupView

urlpatterns = [
    path('hello/<str:name>/', hello),
    path('signup/', SignupView.as_view()),
    path('login/', LoginView.as_view())
]
