import React, {
    useState
} from "react";
import { Input } from "@nextui-org/react";
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
import Image from "../../assets/images/usgaap/image1.png";
import { sendEmail } from "../../services/email";
import "./WebinarRegister.css";

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

const WebinarRegister = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

        const handleOpen = (e) => {
            e.preventDefault();
            // Aqui debo de verficiar
            if (fullName.replace(/\s+/g, '') === '' || email.replace(/\s+/g, '') === '' || phone.replace(/\s+/g, '') === '' || subject.replace(/\s+/g, '') === '') {
                enqueueSnackbar("¡Error! Debes completar todos los campos.", { variant: "error" });
                return;
            }        
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
                subject: 'Inscripción a Webinar.',
                message: 'El cliente viene de la empresa  ' + subject + '. El cliente desea inscribirse al Webinar. Con lo cual se tiene que poner en contacto con el cliente.',
            };
    
            try {
                await sendEmail(formData);
                enqueueSnackbar("Nos pondremos en contacto proximamente.", { variant: "success" });
                setFullName("");
                setEmail("");
                setPhone("");
                setSubject("");
            } catch (error) {
                enqueueSnackbar("¡Error! No se pudo enviar el formulario :(", { variant: "error" });
            } finally {
                setIsLoading(false);
            }
        };

    return (
        <section className="webinar-register-container">
            <div className="banner-container">
                <h1>Webinar</h1>
                <h2>Innovación en seguros</h2>
                <p>Asegura tu lugar llenando el siguiente formulario.</p>
            </div>
            <section className="more-info">
                <form className="form-container">
                    <h1>Registro</h1>
                    <div className="my-inputs-container">
                        <Input
                            id="name"
                            type="text"
                            label="Nombre Completo"
                            isClearable
                            variant="flat"
                            size="md"
                            color="default"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <Input
                            id="email"
                            type="email"
                            label="Correo Electrónico"
                            isClearable
                            variant="flat"
                            size="md"
                            color="default"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            id="phone"
                            type="text"
                            label="Teléfono"
                            isClearable
                            variant="flat"
                            size="md"
                            color="default"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            id="company"
                            type="text"
                            label="Empresa"
                            isClearable
                            variant="flat"
                            size="md"
                            color="default"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handleOpen}
                    >
                        Registrarme
                    </button>
                </form>
                <div className="image-container">
                    <img src={Image} alt="Webinar" />
                </div>
            </section>
            <Modal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isDismissable={false}
                backdrop="blur"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">¡Misión Mensaje!</ModalHeader>
                    <ModalBody>
                        <p>¡El reloj avanza! ¿Éstas seguro que deseas inscribirte a nuestro Webinar?</p>
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
                            ¡Inscribirme!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 100 })}
                open={isLoading}
            >
                <GradientCircularProgress />
            </Backdrop>
        </section>
    );
};

export default WebinarRegister;