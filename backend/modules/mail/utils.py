from django.http import JsonResponse
from decouple import config

def validate_token(request):
    token = request.headers.get('Authorization')
    if token != f'Token {config("EMAIL_TOKEN_SECRET")}':
        return JsonResponse({"error": "Unauthorized access."}, status=403)
    return None

def validate_request_data(data):
    required_fields = ['fullname', 'email', 'phone_number', 'subject', 'message']
    for field in required_fields:
        if not data.get(field):
            return JsonResponse({"error": f"El campo {field} es requerido."}, status=400)
    return None

def html_email_message(fullname, email, phone_number, subject, message):
    return f"""
        <html>
            <body style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <h1 style="color: #007bff;">Nuevo mensaje de contacto desde aktuarios.com.mx</h1>
                    <p>Un cliente ha enviado un mensaje a través del formulario de contacto. Por favor, responde lo antes posible.</p>
                    <p style="color: red;"><strong>Nota de seguridad:</strong> El departamento de sistemas recomienda no abrir enlaces externos que no sean de confianza, ya que podrían ser intentos de phishing.</p>
                </div>
                <div style="margin-top: 20px;">
                    <h2>Detalles del mensaje:</h2>
                    <p><strong>Nombre Completo:</strong> {fullname}</p>
                    <p><strong>Correo Electrónico:</strong> {email}</p>
                    <p><strong>Número de Teléfono:</strong> {phone_number}</p>
                    <p><strong>Asunto:</strong> {subject}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>{message}</p>
                </div>
                <footer style="margin-top: 20px; font-size: 0.9em; color: #777;">
                    <p>Este mensaje fue generado automáticamente por el sistema de contacto de aktuarios.com.mx.</p>
                </footer>
            </body>
        </html>
    """