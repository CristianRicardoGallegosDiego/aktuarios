import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
            <section className="banner-container">
                <h1>Expertos en Servicios Actuariales: Soluciones Precisas y Confiables</h1>
                <p>En Aktuarios Desarrollo Actuarial S. C. nos dedicamos a proporcionar servicios innovadores y de alta calidad, apoyados por herramientas y tecnologías de vanguardia.</p>
                <Link to="/contactanos">Cotizar estudio</Link>
            </section>
            <section className="letter-container-home">
                <div className="body-container">
                    <div className="text-info-container">
                        <p>
                            Somos un grupo de actuarios que ofrecen soluciones por medio de
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
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;