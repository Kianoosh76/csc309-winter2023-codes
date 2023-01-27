from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect, HttpResponseNotAllowed
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt


def hello(request, name):
    return HttpResponse(f"Hey {name}, how are you?")


def signup(request):
    if request.method == 'GET':
        return TemplateResponse(request, 'accounts/signup.html')

    elif request.method == 'POST':
        errors = []

        if len(username := request.POST.get('username', '')) < 6:
            errors += ["Username must be at least 6 characters"]

        password = request.POST.get('password', '')
        password2 = request.POST.get('password2', '')

        if password != password2:
            errors += ["Passwords do not match"]

        if errors:
            return TemplateResponse(request, 'accounts/signup.html',
                                    context={'errors': errors})

        return HttpResponseRedirect(f'/accounts/hello/{username}')
    else:
        return HttpResponseNotAllowed(['GET', 'POST'])

