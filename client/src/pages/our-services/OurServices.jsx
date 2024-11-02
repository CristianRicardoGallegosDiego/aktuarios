import React from "react";
import Image1 from "../../assets/images/our-services/image1.png";
import Image2 from "../../assets/images/our-services/image2.png";
import Image3 from "../../assets/images/our-services/image3.png";
import "./OurServices.css";

const OurServices = () => {
    return (
        <section className="our-services-container">
            <div className="banner">
                <h1>Nuestros servicios</h1>
                <div></div>
            </div>
            <section className="more-information-container">
                <div className="item">
                    <img src={Image1} alt="Image1" />
                    <div>
                        <h2>Valuación Actuarial y revisión de los pasivos laborales</h2>
                        <ul>
                            <li>Valuación actuarial de pasivos laborales bajo NIF D-3, ASC 715, ASC 712 (principios contables norteamericanos) y IAS 19 (principios contables internacionales).</li>
                            <li>Revisión de la razonabilidad de los pasivos laborales y el correcto apego de su reconocimiento bajo las distintas normas contables aplicables.</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <h2>Plan de retiro</h2>
                        <ul>
                            <li>Diseño, cálculo, proyección, comunicación y administración de planes de pensiones para cubrir el pasivo laboral por envejecimiento del personal, considerando esquemas de beneficio definido, contribución definida o mixtos.</li>
                            <li>Actualización de su plan de pensiones y alineación de la estrategia de compensación a largo plazo con la estrategia del negocio y/o mercado.</li>
                        </ul>
                    </div>
                    <img src={Image2} alt="Image2" />
                </div>
                <div className="item">
                    <img src={Image3} alt="Image3" />
                    <div>
                        <h2>Otros servicios</h2>
                        <ul>
                            <li>Asesoría en la Cuantificación de impactos en el precio y en la determinación de los pasivos contingentes de las empresas</li>
                            <li>Análisis y asesoría en temas de pasivos laborales</li>
                            <li>Análisis y asesoría en Planes individuales de jubilación.</li>
                            <li>Asesoría en Jubilación y retiro.</li>
                            <li>Diseño de estrategias de ahorro para la jubilación.</li>
                            <li>Análisis de matrices de riesgos y controles asociados a procesos de nómina y beneficios a los empleados.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OurServices;