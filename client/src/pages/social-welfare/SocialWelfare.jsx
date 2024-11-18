import React from "react";
import Image1 from "../../assets/images/SocialWelfare/image1.png";
import Image2 from "../../assets/images/SocialWelfare/image2.png";
import "./SocialWelfare.css";

const SocialWelfare = () => {
    return (
        <section className="social-welfare-container">
            <div className="banner">
                <h1>Previsión Social</h1>
                <div></div>
            </div>
            <section className="info-container">
                <div className="items">
                    <div className="info">
                        <p>Un programa de Previsión Social busca optimizar la retribución a los empleados mediante la implementación o modificación de prestaciones, aprovechando las ventajas fiscales.</p>
                        <p>Un programa de Previsión Social optimiza la retribución de empleados mediante prestaciones, aprovechando ventajas fiscales.</p>
                    </div>
                    <div className="image">
                        <img src={Image1} alt="Imagen de la empresa."/>
                    </div>
                </div>
                <div className="items">
                    <div className="image">
                        <img src={Image2} alt="Imagen de la empresa."/>
                    </div>
                    <div className="info">
                        <p>La flexibilidad de estos planes permite a los empleados adaptar las prestaciones a sus necesidades. Además, el programa ayuda a enfrentar la inflación y mejora la productividad del personal. Entre los beneficios que se pueden otorgar se incluyen:</p>
                        <ul>
                            <li>Guarderías.</li>
                            <li>Actividades deportivas.</li>
                            <li>Actividades culturales.</li>
                            <li>Becas educacionales.</li>
                            <li>Servicios médicos y hospitalarios.</li>
                            <li>Seguros de vida.</li>
                            <li>Seguros de gastos médicos.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SocialWelfare;