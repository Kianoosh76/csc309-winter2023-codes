from django.urls import path

from accounts.views import hello, signup

urlpatterns = [
    path('hello/<str:name>/', hello),
    path('signup/', signup),
]
