from django.http import HttpResponse

def index(request):
    return HttpResponse("The server is up and ready for interstellar travel!")