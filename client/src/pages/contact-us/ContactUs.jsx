import React, {
    useState
} from "react";
import GlobeView from "../../components/ui/globe/GlobeView";
import { sendEmail } from "../../services/email";
import StaticTruck from "../../assets/images/Truck.svg";
//import DynamicTruck from "../../assets/images/Truck.gif";
import "./ContactUs.css";


import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

const ContactUsForm = () => {
    /**const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");*/

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleEmail = async (e) => {
        e.preventDefault();
        setIsOpen(false);

        const formData = {
            fullname: "Tu nombre",
            email: "tu_email@example.com",
            phone_number: "1234567890",
            subject: "Asunto del correo",
            message: "Mensaje del correo",
        };

        try {
            const result = await sendEmail(formData);
            alert(result.message);
        } catch (error) {
            alert(error.message);
        }
    };
    
    
    

    return (
        <section className="contact-us-form-container">
            <h1>¡Nos encanta escuchar!</h1>
            <p>
                Gracias por dedicar su valioso tiempo a interactuar con nosotros. Queremos que se sienta comprendido
                y apreciado en cada paso del camino. Inicie el diálogo y responderemos lo antes posible con el
                objetivo de ofrecerle el mejor servicio de acuerdo a sus necesidades.
            </p>
            <form className="form-container">
                <Input 
                    id="name"
                    type="text"
                    label="Nombre Completo"
                    description="Ingrese su nombre completo."
                    errorMessage="¿Así se escribe? Inténtalo otra vez."
                    isClearable
                    variant="bordered"
                    size="md"
                    color="primary"
                />
                <div className="email-and-phone">
                    <Input 
                        id="email"
                        type="email"
                        label="Correo Electrónico"
                        description="Ingrese su correo electrónico."
                        errorMessage="¡Oops! Ese correo no tiene buena pinta."
                        isClearable
                        variant="bordered"
                        size="md"
                        color="primary"
                    />
                    <Input 
                        id="phone"
                        type="text"
                        label="Teléfono"
                        description="Ingrese su número de teléfono."
                        errorMessage="¡Error! Ese número no suena en nuestro radar."
                        isClearable
                        variant="bordered"
                        size="md"
                        color="primary"
                    />
                </div>
                <Input 
                    id="subject"
                    type="text"
                    label="Asunto"
                    description="Ingrese el asunto de su mensaje."
                    errorMessage="¡Vaya! Parece que olvidaste ingresar el asunto."
                    isClearable
                    variant="bordered"
                    size="md"
                    color="primary"
                />
                <Textarea
                    id="message"
                    type="text"
                    label="Mensaje"
                    description="Ingrese su mensaje."
                    errorMessage="¡Vaya! Tu mensaje está haciendo acrobacias invisibles. Inténtalo de nuevo."
                    minRows={5}
                    maxRows={5}
                    variant="bordered"
                    size="md"
                    color="primary"
                />
                <button onClick={handleOpen}>
                    <img src={StaticTruck} alt="Truck"/>
                    <p>Enviar</p>
                </button>
            </form>
            <Modal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isDismissable={false}
                backdrop="blur"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">¡Misión Mensaje!</ModalHeader>
                    <ModalBody>
                        <p>¡El reloj avanza! ¿Confirmas que deseas enviar este mensaje para una evaluación experta?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={() => setIsOpen(false)}
                            color="danger"
                            variant="light"
                        >
                            ¡Fin del viaje!
                        </Button>
                        <Button
                            color="primary"
                            className="text-white font-bold"
                            onClick={handleEmail}
                        >
                            ¡Lanzar cohete!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </section>
    );
};

const ContactUs = () => {
    return (
        <section className="contact-us-page-container">
            <div className="contact-us-globe-container">
                <GlobeView />
            </div>
            <ContactUsForm />
        </section>
    );
};

export default ContactUs;