from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect, HttpResponseNotAllowed
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView

from accounts.forms import SignupForm


def hello(request, name):
    print(request.headers)
    return HttpResponse(f"Hey {request.user.first_name}, how are you?")


class SignupView(FormView):
    template_name = 'accounts/signup.html'
    form_class = SignupForm

    def form_valid(self, form):
        username = form.cleaned_data['username']
        User.objects.create_user(username=username,
                                 password=form.cleaned_data['password'])
        return HttpResponseRedirect(f'/accounts/hello/{username}')


class LoginView(View):
    def get(self, request, *args, **kwargs):
        return TemplateResponse(request, 'accounts/login.html')

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if user := authenticate(username=username, password=password):
            login(request, user)
            return HttpResponseRedirect(f'/accounts/hello/{username}')
        else:
            error = 'Username or password is wrong'
            return TemplateResponse(request, 'accounts/login.html',
                                    context={'errors': [error]})