export const sendEmail = async (formData) => {
    try {
        const endPoint = `${process.env.REACT_APP_URL_SERVER}${process.env.REACT_APP_EMAIL_ENDPOINT}`;
        const response = await fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${process.env.REACT_APP_EMAIL_TOKEN_SECRET}`,
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error(`Error al enviar el correo: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error en la comunicación con el servidor: ${error.message}`);
    }
}