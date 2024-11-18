import React from "react";
import Image1 from "../../assets/images/retirement-pension-plans/image1.png";
import Image2 from "../../assets/images/retirement-pension-plans/image2.png";
import "./RetirementPensionPlans.css";

const RetirementPensionPlans = () => {
    return (
        <section className="retirement-pension-plans">
            <div className="banner">
                <h1>Planes de Pensiones por Jubilación</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="items">
                    <div className="ps">
                        <p>La implantación de un plan de pensiones busca asegurar a los empleados un ingreso al llegar a la jubilación, complementando los beneficios de las instituciones de seguridad social.</p>
                        <p>Constituir una reserva para jubilaciones reconoce el envejecimiento de los empleados y permite amortizar el pasivo generado por su antigüedad en la empresa.</p>
                    </div>
                    <div className="img">
                        <img src={Image1} alt="Imagen de la empresa."/>
                    </div>
                </div>
                <div className="items">
                    <div className="img">
                        <img src={Image2} alt="Imagen de la empresa."/>
                    </div>
                    <div className="ps">
                        <p>La labor del Actuario Consultor incluye diseñar el plan de pensiones adecuado, valorar los pasivos y su financiamiento, administrar el plan, implementarlo ante autoridades y comunicarlo al personal.</p>
                        <p>La labor del Actuario Consultor incluye diseñar el plan de pensiones adecuado, valorar pasivos y su financiamiento, administrar el plan, implementarlo y comunicarlo al personal.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default RetirementPensionPlans;