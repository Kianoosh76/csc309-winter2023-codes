from django.urls import path

from stores.views import StoreView, ProductView, StoresView, ProductsView

urlpatterns = [
    path('store/<int:id>/', StoreView.as_view()),
    path('store/all/', StoresView.as_view()),
    path('product/<int:id>/', ProductView.as_view()),
    path('products/', ProductsView.as_view()),
]