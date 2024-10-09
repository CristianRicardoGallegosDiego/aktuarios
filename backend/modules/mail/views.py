from django.http import HttpResponse

def index(request):
    return HttpResponse("¡The mail module is working!")

def send_mail(request):
    return HttpResponse("Mail sent")