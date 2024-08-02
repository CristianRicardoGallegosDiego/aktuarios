import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Home.css";

const getFormattedDate = () => {
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    return `${day} de ${month} de ${year}`;
};

const Home = () => {
    return (
        <section className="home-container">
            <section className="banner-container">
                <h1>Expertos en Servicios Actuariales: Soluciones Precisas y Confiables</h1>
                <p>En Aktuarios Desarrollo Actuarial S. C. nos dedicamos a proporcionar servicios innovadores y de alta calidad, apoyados por herramientas y tecnologías de vanguardia.</p>
                <Link to="/contactanos">Cotizar estudio</Link>
            </section>
            <section className="letter-container-home">
                <div className="header-container">
                    <div className="presentation-container">
                        <img src={Logo} alt="Logo" />
                        <h1>Aktuarios Desarrollo Actuarial S. C.</h1>
                    </div>
                    <div className="date">Ciudad de México, {getFormattedDate()}.</div>
                </div>
                <div className="body-container">
                    <h2>Distinguido cliente:</h2>
                    <div className="text-info-container">
                        <p>
                            Agradecemos la oportunidad que nos brindan para presentarles nuestros
                            servicios actuariales. Nuestro objetivo es que dichos servicios los ayuden y se
                            adapten a satisfacer sus necesidades y a su vez cumplan con sus expectativas de
                            negocio. Somos un grupo de actuarios que ofrecen soluciones por medio de
                            lineamientos actuariales, financieros y contables, con la finalidad de que las
                            empresas reconozcan sus pasivos contingentes y les permita tomar de manera
                            oportuna las mejores decisiones organizacionales, lo cual se vea reflejado en la
                            rentabilidad de la Compañía.
                        </p>
                        <p>
                            Estamos comprometidos a proporcionar una asesoría del más alto nivel de
                            calidad, a través de un servicio personalizado, herramientas de comunicación y
                            a través de un equipo de expertos con iniciativa, receptivo y con una amplia
                            experiencia como Asesores y/o Auditores. Dicha experiencia, nos permite
                            identificar necesidades y/o riesgos que pueden resultar al evaluar procesos
                            integrales y/o operativos de las distintas áreas involucradas, de tal manera que
                            nos permita dar beneficios o un gran valor agregado.
                        </p>
                        <p>
                            Brindamos un servicio innovador, apoyándonos en las herramientas y
                            tecnologías necesarias que nos permiten desarrollar nuestras funciones con una
                            excelente calidad y oportunidad.
                        </p>
                        <p>
                            Nuestro equipo se especializa tanto en el cálculo actuarial de obligaciones
                            laborales como en el reconocimiento contable de estos pasivos en los estados
                            financieros.
                        </p>
                        <p>
                            Estamos a sus órdenes para cualquier duda o comentario al respecto.
                        </p>
                    </div>
                    <div className="farewell-container">
                        <p>Atentamente,</p>
                        <p className="bold">AKTUARIOS DESARROLLO ACTUARIAL S. C.</p>
                    </div>
                </div>
                <div className="letter-footer">
                    <ul>
                        <li>Aktuarios Desarrollo Actuarial S. C.</li>
                        <li>Real de Los Reyes #303</li>
                        <li>Los Reyes, Alc. Coyoacán</li>
                        <li>Ciudad de México, C. P. 04330</li>
                        <li>México</li>
                    </ul>
                    <ul className="ul-container-letter-footer">
                        <li><p>Sitio Web: </p><a href="https://www.aktuarios.com" target="_blank" rel="noopener noreferrer">www.aktuarios.com</a></li>
                        <li><p>Teléfono de Oficina 1: </p> <a href="tel:+525568125783">+52 55 6812 5783</a></li>
                        <li><p>Teléfono de Oficina 2: </p> <a href="tel:+525568125783">+52 55 9291 4643</a></li>
                    </ul>
                    <ul className="ul-container-letter-footer">
                        <li><p>Correo Electrónico 1: </p><a href="mailto:josecarlos@aktuarios.com" target="_blank" rel="noopener noreferrer">josecarlos@aktuarios.com</a></li>
                        <li><p>Correo Electrónico 2: </p><a href="mailto:monica@aktuarios.com" target="_blank" rel="noopener noreferrer">monica@aktuarios.com</a></li>
                        <li><p>Correo Electrónico 3: </p><a href="mailto:javier@aktuarios.com" target="_blank" rel="noopener noreferrer">javier@aktuarios.com</a></li>
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default Home;