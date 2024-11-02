import React from "react";
import { Link } from "react-router-dom";
import Circle1 from "../../assets/images/home/circle1.png";
import Circle2 from "../../assets/images/home/circle2.png";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
            <section className="banner-container">
                <h1>Expertos en Servicios Actuariales: Soluciones Precisas y Confiables</h1>
                <p>En Aktuarios Desarrollo Actuarial S. C. nos dedicamos a proporcionar servicios innovadores y de alta calidad, apoyados por herramientas y tecnologías de vanguardia.</p>
                <Link to="/contactanos">Cotizar estudio</Link>
            </section>
            <section className="title">
                <h2>¡Bienvenido a <em>Aktuarios!</em></h2>
            </section>
            <section className="more-info-container">
                <div>
                    <p><b>S</b>omos un grupo de actuarios que ofrecen <strong>soluciones</strong> por medio de <strong>lineamientos actuariales, financieros y contables</strong>, con la finalidad de que las empresas reconozcan sus pasivos contingentes y les permita tomar de manera oportuna las <strong>mejores decisiones organizacionales</strong>, lo cual se vea reflejado en la <strong>rentabilidad</strong> de la Compañía.</p>
                    <img src={Circle1} alt="Imagen de la empresa" />
                </div>
                <div>
                    <img src={Circle2} alt="Imagen de la empresa" />
                    <p><b>E</b>stamos comprometidos a proporcionar una <strong>asesoría del más alto nivel de calidad</strong>, a través de un <strong>servicio personalizado</strong>, herramientas de comunicación y a través de un equipo de expertos con iniciativa, receptivo y con una <strong>amplia experiencia como Asesores y/o Auditores</strong>.</p>
                </div>
            </section>
            <section className="acknowledgments-container">
                <h2>Gracias por confiar en nosotros, estamos aquí para acompañarlos en su crecimiento.</h2>
            </section>
        </section>
    );
};

export default Home;