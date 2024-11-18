import React from "react";
import Image1 from "../../assets/images/nif-d3/circle1.png";
import Image2 from "../../assets/images/nif-d3/circle2.png";
import "./IAS.css";

const IAS = () => {
    return (
        <section className="ias-container">
            <div className="banner">
                <h1>IAS</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="first-item">
                    <p>El IAS 19 (Norma Internacional de Contabilidad) tiene por objeto establecer las normas de valuación, presentación y revelación para el reconocimiento inicial y posterior en los estados financieros de una entidad de los beneficios que ésta otorga a sus empleados.</p>
                    <div>
                        <img src={Image1} alt="Imagen de la empresa."/>
                    </div>
                </div>
                <div className="second-item">
                    <p className="p">La norma exige que la entidad reconozca:</p>
                    <div className="first">
                        <div>
                            <img src={Image2} alt="Imagen de la empresa."/>
                        </div>
                        <p>Un pasivo cuando el empleado ha prestado servicios a cambio de beneficios que se pagarán en el futuro, y un gasto cuando la entidad ha consumido el beneficio económico del servicio prestado por el empleado.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default IAS;