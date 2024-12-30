import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/nif-d3/circle1.png";
import Image2 from "../../assets/images/nif-d3/circle2.png";
import "./NifD3.css";

const NifD3 = () => {
    return (
        <section className="nifd3-container">
            <div className="banner">
                <h1>NIF D-3</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="item-container-one">
                    <p>Esta Norma tiene por objeto establecer las normas de valuación, presentación y revelación para el reconocimiento inicial y posterior en los estados financieros de una entidad de los beneficios que ésta otorga a sus empleados.</p>
                    <img src={Image1} alt="Imagen de la empresa."/>
                </div>
                <div className="item-container-two">
                    <div>
                        <p>La norma exige que la entidad reconozca:</p>
                        <ul>
                            <li>Un <strong>pasivo</strong> cuando el empleado ha prestado servicios a cambio de beneficios que se pagarán en el futuro</li>
                            <li>Un <strong>gasto</strong> cuando la entidad ha consumido el beneficio económico del servicio prestado por el empleado.</li>
                        </ul>
                    </div>
                    <img src={Image2} alt="Imagen de la empresa."/>
                </div>
            </section>
            <ul className="nav-container">
                <li><Link to="/servicios/pasivos-contingentes-laborales/usgaap">USGAAP</Link></li>
                <li><Link to="/servicios/pasivos-contingentes-laborales/ias">IAS</Link></li>
            </ul>
        </section>
    );
};

export default NifD3;