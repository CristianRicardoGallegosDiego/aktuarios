import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/webinar/Image1.png";
import "./Webinar.css";

const Webinar = () => {
    return (
        <section className="webinar-container">
            <div className="banner-container">
                <div className="titles-container">
                    <h1>Webinar</h1>
                    <h2>Innovación en seguros</h2>
                </div>
                <div>
                    <p>Descubre cómo una buena gestión fiscal puede marcar la diferencia en tus finanzas personales y empresariales. Aprende de expertos los beneficios de la planeación tributaria y estrategias para cumplir con tus obligaciones mientras maximizas tus recursos. ¡Inscríbete ahora y asegura un futuro financiero sólido!</p>
                </div>
                <div>
                    <Link to="/webinar/registro">
                        ¡Inscribete ya!
                    </Link>
                </div>
            </div>
            <div className="content-container">
                <div className="topics-container">
                    <h2>Puntos a tratar en nuestro Webinar</h2>
                    <div className="topics">
                        <div>
                            <h3>Importancia de la planeación fiscal:</h3>
                            <p>Cómo una estrategia adecuada puede optimizar tus recursos y prevenir problemas legales.</p>
                        </div>
                        <div>
                            <h3>Principales obligaciones fiscales:</h3>
                            <p>Un repaso de los impuestos más relevantes y cómo cumplir con ellos de manera eficiente.</p>
                        </div>
                        <div>
                            <h3>Beneficios de la deducción de impuestos:</h3>
                            <p>Identificar gastos deducibles y aprovechar incentivos fiscales para reducir tu carga tributaria.</p>
                        </div>
                        <div>
                            <h3>Herramientas y recursos clave:</h3>
                            <p>Tecnologías, plataformas y servicios que facilitan el cumplimiento fiscal y mejoran la gestión financiera.</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Image} alt="Webinar" />
                </div>
            </div>
        </section>
    );
};

export default Webinar;