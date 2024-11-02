import React from "react";
import Image1 from "../../assets/images/usgaap/image1.png";
import Image2 from "../../assets/images/usgaap/image2.png";
import "./Usgaap.css";

const Usgaap = () => {
    return (
        <section className="usgaap-container">
            <div className="banner">
                <h1>USGAAP</h1>
                <div></div>
            </div>
            <section className="body-container">
                <div>
                    <p>Los USGAAP (United States Generally Accepted Accounting Principles) son los principios de contabilidad generalmente aceptados y usados por las compañías con sede en Estados Unidos o que cotizan en Wall Street. Abarcan estándares, interpretaciones, opiniones, boletines y maneras aceptadas de llevar la contabilidad para dichas empresas.</p>
                    <img src={Image1}  alt="Imagen de la empresa"/>
                </div>
                <div>
                    <img src={Image2} alt="Imagen de la empresa"/>
                    <p>En los Estados Unidos, los planes de beneficio definido y otros planes posteriores al retiro; así como los beneficios posteriores al empleo no relacionadas con la jubilación deben seguir las reglas del Accounting Standards Codification (ASC 712 y ASC 715) del Consejo de Normas de Contabilidad Financiera (FASB). La valuación ASC determina el gasto (o ingreso) que se carga en el estado de ingresos netos de la empresa, así como el pasivo (o activo) que se informa en el balance general de la empresa.</p>
                </div>
            </section>
        </section>
    );
};

export default Usgaap;