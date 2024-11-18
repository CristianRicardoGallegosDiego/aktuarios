import React from "react";
import Companies from "./companies.json";
import "./Clients.css";

const Clients = () => {
    return (
        <section className="clients-container">
            {/**<div className="information-container">
                <h1>¿Por qué confiar en nuestra consultoría Aktuarios?</h1>
                <h2>Respaldada por expertos.</h2>
                <p>Con experiencia y precisión, ayudamos a las empresas a reconocer y gestionar sus pasivos contingentes, asegurando decisiones organizacionales acertadas que impulsen la rentabilidad. Nuestro equipo de expertos está comprometido en ofrecer soluciones actuariales, financieras y contables adaptadas a tus necesidades, para que cada decisión sume valor.</p>
            </div>**/}
            <section className="banner-container">
                <div className="first-item">
                    <p>¿Por qué confiar en nuestra consultoría Aktuarios?</p>
                </div>
                <div className="second-item">
                    <div className="first">
                        <h2>Respaldada por expertos.</h2>
                    </div>
                    <div className="second">
                        <p>Con experiencia y precisión, ayudamos a las empresas a reconocer y gestionar sus pasivos contingentes, asegurando decisiones organizacionales acertadas que impulsen la rentabilidad. Nuestro equipo de expertos está comprometido en ofrecer soluciones actuariales, financieras y contables adaptadas a tus necesidades, para que cada decisión sume valor.</p>
                    </div>
                </div>
            </section>
            <div className="slider-container-main">
                <div className="slider-container">
                    <div className="slide-track">
                        {
                            Companies.map((company, index) => {
                                return (
                                    <img src={company.img} alt={company.alt} key={index} className="slide"/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;