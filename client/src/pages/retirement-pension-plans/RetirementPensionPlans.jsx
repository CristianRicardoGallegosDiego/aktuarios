import React from "react";
import LinksContainer from "../../components/common/links-container/LinksContainer";
import "./RetirementPensionPlans.css";

const RetirementPensionPlans = () => {
    return (
        <section className="retirement-pension-plans">
            <div className="banner">
                <h1>Valuación Actuarial y revisión de los pasivos laborales</h1>
                <div></div>
            </div>
            <section className="information-container">
                <div className="more-info">
                    <p>Valuación actuarial de pasivos laborales bajo NIF D-3, ASC 715, ASC 712 (principios contables norteamericanos) y IAS 19 (principios contables internacionales).</p>
                    <p>Revisión de la razonabilidad de los pasivos laborales y el correcto apego de su reconocimiento bajo las distintas normas contables aplicables.</p>
                </div>
                <LinksContainer />
            </section>
        </section>
    );
};

export default RetirementPensionPlans;