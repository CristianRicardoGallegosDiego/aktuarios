import React from "react";
//import MissionVisionExperience from "../../components/sections/mission-vision-experience/MissionVisionExperience.jsx";
//import TeamMembers from "../../components/sections/team-members/TeamMembers.jsx";
import Image1 from "../../assets/images/about-us/image1.png";
import Image2 from "../../assets/images/about-us/image2.png";
import Image3 from "../../assets/images/about-us/image3.png";
import Relation1 from "../../assets/images/about-us/Relation1.svg";
import Relation2 from "../../assets/images/about-us/Relation2.png";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="about-us-container">
            {/**<MissionVisionExperience />**/}
            {/**<TeamMembers />**/}
            <section className="banner-container">
                <section>
                    <h2>Nosotros</h2>
                    <div>
                        <h3>Misión</h3>
                        <p><b>Brindar</b> servicios de <b>Consultoría Actuarial</b> a las empresas de tal manera que les permita cubrir sus necesidades, minimizar riesgos y tener una adecuada toma de decisiones. <b>Crear Valor y Diferencia.</b></p>
                    </div>
                    <div>
                        <h3>Visión</h3>
                        <p><b>Ser una empresa líder</b> de Consultoría Actuarial por medio de <b>productos innovadores</b>, los cuales combinados con nuestra <b>amplia experiencia</b> permitan poner a disposición de nuestros clientes una <b>perspectiva de negocios diferente y única</b>, así como a sus empleados mejores prestaciones y condiciones laborales.</p>
                    </div>
                </section>
                <div className="image-container">
                    <img src={Image1} alt="Imagen de la empresa" />
                </div>
            </section>
            <section className="experience-container">
                <h2>Experiencia</h2>
            </section>
            <section className="more-experience-container">
                <div className="first-container">
                    <p>Estamos comprometidos a proporcionar una asesoría del más alto nivel de calidad. Nuestra experiencia comprende instituciones financieras, Industria manufacturera, farmacéutica, Industria Automotriz, Comunicaciones, consumo, entre otras.</p>
                </div>
                <div className="second-container">
                    <div>
                        <img src={Image2} alt="Imagen de la empresa" />
                        <p>Contamos con un grupo de expertos con una amplia experiencia profesional en asesoría en valuación, diseño, rediseño y comunicación de planes de pensiones y auditoria.</p>
                    </div>
                    <div>
                        <p>Nuestro enfoque integral se orienta no solo al desarrollo de modelos actuariales, sino a la identificación, mitigación y cobertura de riesgos asociados a la administración de beneficios a empleados.</p>
                        <img src={Image3} alt="Imagen de la empresa" />
                    </div>
                </div>
            </section>
            <section className="relations-container">
                <h1>Socios Comerciales</h1>
                <div>
                    <a href="https://www.connexus.mx/" target="_blank" rel="noreferrer">
                        <img src={Relation1} alt="Imagen de la empresa" />
                    </a>
                    <a href="https://cidtes.org/" target="_blank" rel="noreferrer">
                        <img src={Relation2} alt="Imagen de la empresa" />
                    </a>
                </div>
            </section>
        </section>
    );
};

export default AboutUs;