import React from "react";
import LinksContainer from "../../components/common/links-container/LinksContainer";
import "./RetirementPlan.css";

const RetirementPlan = () => {
    return (
        <section className="social-welfare-container">
            <div className="banner">
                <h1>Plan de retiro</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="more-info">
                    <li>Valuación actuarial de pasivos laborales bajo NIF D-3, ASC 715, ASC 712 (principios contables norteamericanos) y IAS 19 (principios contables internacionales).</li>
                    <li>Revisión de la razonabilidad de los pasivos laborales y el correcto apego de su reconocimiento bajo las distintas normas contables aplicables.</li>
                </div>
                <LinksContainer />
            </section>
        </section>
    );
};

export default RetirementPlan;