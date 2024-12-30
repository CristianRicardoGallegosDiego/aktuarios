import React, {
    useState
} from "react";
import GlobeView from "../../components/ui/globe/GlobeView";
import { sendEmail } from "../../services/email";
//import StaticTruck from "../../assets/images/Truck.svg";
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { enqueueSnackbar } from "notistack";

function GradientCircularProgress() {
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size="3rem" />
        </React.Fragment>
    );
}

const ContactUs = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleEmail = async (e) => {
        e.preventDefault();
        setIsOpen(false);
        setIsLoading(true);

        const formData = {
            fullname: fullName,
            email: email,
            phone_number: phone,
            subject: subject,
            message: message,
        };

        try {
            await sendEmail(formData);
            enqueueSnackbar("¡Mensaje enviado con éxito :)!", { variant: "success" });
            setFullName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        } catch (error) {
            enqueueSnackbar("¡Error! No se pudo enviar el mensaje :(", { variant: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact-us-page-container">
            <div className="contact-us-globe-container">
                <GlobeView />
            </div>
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
                        errorMessage="¿Así se escribe? Inténtalo otra vez."
                        isClearable
                        variant="bordered"
                        size="md"
                        color="default"
                        className="my-input"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <div className="email-and-phone">
                        <Input 
                            id="email"
                            type="email"
                            label="Correo Electrónico"
                            errorMessage="¡Oops! Ese correo no tiene buena pinta."
                            isClearable
                            variant="bordered"
                            size="md"
                            color="default"
                            className="my-input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input 
                            id="phone"
                            type="text"
                            label="Teléfono"
                            errorMessage="¡Error! Ese número no suena en nuestro radar."
                            isClearable
                            variant="bordered"
                            size="md"
                            color="default"
                            className="my-input"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <Input 
                        id="subject"
                        type="text"
                        label="Asunto"
                        errorMessage="¡Vaya! Parece que olvidaste ingresar el asunto."
                        isClearable
                        variant="bordered"
                        size="md"
                        color="default"
                        className="my-input"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <Textarea
                        id="message"
                        type="text"
                        label="Mensaje"
                        errorMessage="¡Vaya! Tu mensaje está haciendo acrobacias invisibles. Inténtalo de nuevo."
                        minRows={5}
                        maxRows={5}
                        variant="bordered"
                        size="md"
                        color="default"
                        className="my-input"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleOpen}>
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
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 100 })}
                open={isLoading}
            >
                <GradientCircularProgress />
            </Backdrop>
        </section>
    );
};

export default ContactUs;