import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Information from "./information.json";
import LogoOne from "../../../assets/images/logo_2.jpg";
import LogoTwo from "../../../assets/images/logo_1.png";
import "./Footer.css";

const FirstFooter = () => {
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
                    <p>¡Conéctate con nosotros y convierte cada click en una oportunidad financiera!</p>
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
                    <div>
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
            </div>
        </div>
    );
};

const SecondFooter = () => {
    return (
        <div className="second-footer-container">
            <div>
                <h3>Copyright © 2024 Aktuarios Desarrollo Actuarial S. C. de México |</h3>
            </div>
            <div>
                <Link to="/">
                    <img src={LogoTwo} alt="Logo" />
                </Link>
            </div>
            <div>
                <h3>| Todos los derechos reservados</h3>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <section className="footer-container">
            <FirstFooter />
            <SecondFooter />
        </section>
    );
};

export default Footer;