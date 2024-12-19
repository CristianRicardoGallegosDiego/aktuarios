import React from "react";
import LinksContainer from "../../components/common/links-container/LinksContainer";
import "./RetirementCounseling.css";

const RetirementCounseling = () => {
    return (
        <section className="retirement-counseling-container">
            <div className="banner">
                <h1>Otros servicios</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="points-container">
                    <ul>
                        <li>Asesoría en la Cuantificación de impactos en el precio y en la determinación de los pasivos contingentes de las empresas en el caso de una compra, venta o fusión. Identificación de contingencias y armonización de beneficios.</li>
                        <li>Análisis y asesoría en temas de pasivos laborales bajo los distintos lineamientos para determinar la correcta aplicación, revelación y el pasivo acumulado al cierre de cada ejercicio considerando los beneficios que otorga la compañía.</li>
                    </ul>
                    <ul>
                        <li>Análisis y asesoría en Planes individuales de jubilación.</li>
                        <li>Asesoría en Jubilación y retiro.</li>
                        <li>Diseño de estrategias de ahorro para la jubilación.</li>
                        <li>Análisis de matrices de riesgos y controles asociados a procesos de nómina y beneficios a los empleados.</li>
                    </ul>
                </div>
                <LinksContainer />
            </section>
        </section>
    );
};

export default RetirementCounseling;