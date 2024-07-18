import React from "react";
import Logo from "../../../assets/images/logo_1.png";
import "./Footer.css";

const FirstFooter = () => {
    return (
        <div className="first-footer-container">

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
                <img src={Logo} alt="Logo" />
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