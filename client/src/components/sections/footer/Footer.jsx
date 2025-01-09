import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Information from "./information.json";
import LogoOne from "../../../assets/images/logoT.png";
import "./Footer.css";

/**const FirstFooter = () => {
    const {
        social_media,
        general_information,
        contact_us: {
            mails_and_mobiles_container: {
                mail_icon,
                mobile_icon,
                mails_and_mobiles
            },
            phones_container: {
                icon,
                phones
            }
        }
    } = Information;

    return (
        <div className="first-footer-container">
            <div className="info-social-media-container">
                <img src={LogoOne} alt="Logo" />
                <div>
                    <p>¡Conéctate con nosotros y convierte cada click en una oportunidad!</p>
                    <ul>
                        {
                            social_media.map((social, index) => {
                                return (
                                    <li key={index}>
                                        <a href={social.url} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={social.icon} alt={social.title}/>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="general-and-contact-container">
                <div className="general-info-container">
                    <h2>Información General</h2>
                    <ul>
                        {
                            general_information.map((info, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={info.url}>{info.title}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="contact-us-container">
                    <h2>Contacto</h2>
                    <div className="info">
                        <div className="mails-and-mobiles-container">
                            <h3>Correos y Télefonos Celulares:</h3>
                            <ul>
                                {
                                    mails_and_mobiles.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div>
                                                    <FontAwesomeIcon icon={mail_icon} alt="Correo"/>
                                                    <a href={item.mail_url} target="_blank" rel="noreferrer">{item.mail}</a>
                                                </div>
                                                <p>-</p>
                                                <div>
                                                    <FontAwesomeIcon icon={mobile_icon} alt="Celular"/>
                                                    <a href={item.mobile_url} target="_blank" rel="noreferrer">{item.mobile}</a>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="phones-container">
                            <h3>Télefonos de Oficina:</h3>
                            <ul>
                                {
                                    phones.map((phone, index) => {
                                        return (
                                            <li key={index}>
                                                <FontAwesomeIcon icon={icon} />
                                                <a href={phone.phone_url} target="_blank" rel="noreferrer">{phone.phone}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="location-container">
                    <h2>Ubicación</h2>
                    <p>
                        <FontAwesomeIcon icon= "fa-solid fa-map-location-dot" alt=""/>
                        Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330, México.
                    </p>
                    <iframe
                        title="Mapa de Ubicación"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

const SecondFooter = () => {
    return (
        <div className="second-footer-container">
            <div>
                <h3>Copyright © 2024 Aktuarios Desarrollo Actuarial S. C.</h3>
            </div>
            <div>
                <h3>Todos los derechos reservados</h3>
            </div>
        </div>
    );
};*/

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-visual main-div">
                <Link to="/" className="logo">
                    <img src={LogoOne} alt="Logo" />
                </Link>
                <div className="infor">
                    <h1>¡Conéctate con nosotros y convierte cada click en una oportunidad!</h1>
                    <div>
                        <a href="https://www.linkedin.com/in/jose-carlos-del-razo-dominguez-15670ba4" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" alt="Facebook"></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-container main-div">
                <div>
                    <h1>Contacto</h1>
                    <ul>
                        <li>
                            <a href="mailto:josecarlos@aktuarios.com" target="_blank" rel="noreferrer">
                                josecarlos@aktuarios.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:monica@aktuarios.com" target="_blank" rel="noreferrer">
                                monica@aktuarios.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:javier@aktuarios.com" target="_blank" rel="noreferrer">
                                javier@aktuarios.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Télefonos de Oficina</h1>
                    <ul>
                        <li>
                            55 6812 5783
                        </li>
                        <li>
                            55 9291 4643
                        </li>
                    </ul>
                </div>
            </div>
            <div className="location-container main-div">
                <h2>Ubicación</h2>
                <p>
                    <FontAwesomeIcon icon= "fa-solid fa-map-location-dot" alt=""/>
                    Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330, México.
                </p>
                <iframe
                    title="Mapa de Ubicación"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                >
                </iframe>
            </div>
        </footer>
    );
};

export default Footer;