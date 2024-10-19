import json
from django.core.mail import EmailMessage
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from decouple import config
from .utils import validate_token, validate_request_data, html_email_message

def index(request):
    return HttpResponse("¡The mail module is working!")

@api_view(['POST'])
def my_courier(request):
    token_error = validate_token(request)
    if token_error:
        return token_error

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        validation_error = validate_request_data(data)
        if validation_error:
            return validation_error

        fullname = data.get('fullname')
        email = data.get('email')
        phone_number = data.get('phone_number')
        subject = data.get('subject')
        message = data.get('message')
        try:
            email_message = EmailMessage(
                "AKTUARIOS - Nuevo mensaje de contacto",
                html_email_message(fullname, email, phone_number, subject, message),
                config('EMAIL_HOST_USER'),
                [config('EMAIL_RECIPIENT')],
            )
            email_message.content_subtype = "html"
            email_message.send()
        except Exception as e:
            return JsonResponse({"error": f"Error sending email: {str(e)}"}, status=500)
        return JsonResponse({"message": "Email sent successfully!"})
    return JsonResponse({"error": "Invalid request method. Only POST is allowed."}, status=405)