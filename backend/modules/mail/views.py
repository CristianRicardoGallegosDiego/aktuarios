from django.http import HttpResponse

def index(request):
    return HttpResponse("¡The mail module is working!")

def send_mail(request):
    to_email = ''
    password = ''
    name= ''
    from_email = ''
    telephone = ''
    subject = ''
    message = ''


    return HttpResponse("The mail has been sent successfully!")