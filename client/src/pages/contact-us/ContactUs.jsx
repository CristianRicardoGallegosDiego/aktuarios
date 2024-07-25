import React, {
    useState
} from "react";
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import GlobeView from "../../components/ui/globe/GlobeView";
import StaticTruck from "../../assets/images/Truck.svg";
import DynamicTruck from "../../assets/images/Truck.gif";
import "./ContactUs.css";

const ContactUsForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className="contact-us-form-container">
            <h1>¡Nos encanta escuchar!</h1>
            <p>
                Gracias por dedicar su valioso tiempo a interactuar con nosotros. Queremos que se sienta comprendido
                y apreciado en cada paso del camino. Inicie el diálogo y responderemos rápidamente para que pueda seguir brindando
                el mejor apoyo a su equipo.
            </p>
            <form className="form-container">
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="name" 
                        label="Nombre Completo" 
                        variant="standard"
                        helperText="Ingrese su nombre completo."
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                    <ContactMailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="email" 
                        label="Correo Electrónico" 
                        variant="standard"
                        helperText="Ingrese su correo electrónico."
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ContactPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="phone" 
                        label="Teléfono" 
                        variant="standard"
                        helperText="Ingrese su número de teléfono."
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SubjectIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="subject" 
                        label="Asunto" 
                        variant="standard"
                        helperText="Ingrese el asunto del mensaje."
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="email" 
                        label="Mensaje"
                        multiline
                        rows={5}
                        variant="standard"
                        helperText="Ingrese el mensaje a enviar."
                        fullWidth
                    />
                </Box>
                <button>
                    <img src={StaticTruck} alt="Truck"/>
                    <p>Enviar</p>
                </button>
            </form>
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