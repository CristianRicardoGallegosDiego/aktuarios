import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/our-services/Group22.png";
import Image2 from "../../assets/images/our-services/Group23.png";
import Image3 from "../../assets/images/our-services/Group24.png";
import "./OurServices.css";

const OurServices = () => {
    return (
        <section className="our-services-container">
            <div className="banner">
                <h1>Nuestros servicios</h1>
                <div></div>
            </div>
            <section className="links-container">
                <Link to="" className="my-link right">
                    <img src={Image1} alt="Image1" />
                    <h2>Valuación Actuarial y revisión de los pasivos laborales</h2>
                </Link>
                <Link to="" className="my-link left">
                    <h2>Plan de retiro</h2>
                    <img src={Image2} alt="Image2" />
                </Link>
                <Link to="" className="my-link right">
                    <img src={Image3} alt="Image3" />
                    <h2>Otros servicios</h2>
                </Link>
            </section>
        </section>
    );
};

export default OurServices;