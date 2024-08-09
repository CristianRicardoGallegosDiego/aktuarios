import React from "react";
import "./Usgaap.css";

const Usgaap = () => {
    return (
        <section>
            <h1>USGAAP</h1>
            <p>En los Estados Unidos de América la entidad encargada de elaborar los ordenamientos de índole contable es el F.A.S.B. (Financial Accounting Standards Board). Entre los boletines (Statements) que este organismo ha emitido, existen cuatro en particular que requieren la participación de un actuario consultor para su elaboración y aplicación.</p>
            <div>
                <p>Estos boletines son los siguientes:</p>
                <ul>
                    <li>
                        <h2>SFAS-87 (Employer´s Accounting for Pensions)</h2>
                        <div>
                            <p>Tiene como alcance la determinación de obligaciones laborales y aplicación contable generadas por los Planes de Pensiones, Planes de Retiro, Beneficios por Antigüedad y similares, que las empresas otorgan a sus trabajadores (La NIF D-3 es su equivalente).</p>
                        </div>
                    </li>
                    <li>
                        <h2>SFAS-88 (Curtailments and Termination Benefits)</h2>
                        <div>
                            <p>Este es un boletín complementario al SFAS-87, ya que tiene por objeto la valuación y registro contable de eventos particulares que pueden presentarse en una empresa que cuente con un plan de pensiones o similar:</p>
                            <ul>
                                <li>La terminación definitiva del Plan (Liquidación de la empresa, venta, fusión, escisión, etc.)</li>
                                <li>Las liquidaciones parciales de pasivos (Pagos únicos, Ventas parciales, Traspaso de personal entre empresas con reconocimiento de antigüedad, etc.)</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h2>SFAS-106 (Post-Retirement Benefits)</h2>
                        <div>
                            <p>Este boletín tiene como objetivo la valuación y contabilización de los beneficios diferentes a pensiones que la empresa otorga a quienes se retiran de la empresa, como por ejemplo los gastos médicos a jubilados.</p>
                        </div>
                    </li>
                    <li>
                        <h2>SFAS-112 (Post-Employment Benefits)</h2>
                        <div>
                            <p>Comprende el registro contable del monto de los pasivos generados por los beneficios contingentes diferentes al sueldo pagado a los empleados durante su vida laboral en la empresa hasta que se retiran, como por ejemplo: La extensión de las prestaciones de la empresa a trabajadores que dejen de laborar de manera temporal.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Usgaap;