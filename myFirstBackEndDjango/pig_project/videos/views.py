from django.shortcuts import render, HttpResponse


# Create your views here.


def home(request):
    return render(request, 'videos/home.html')


def about(request):
    return render(request, 'videos/about.html')


def portfolio(request):
    return render(request, 'videos/portfolio.html')


def contact(request):
    return render(request, 'videos/contact.html')
