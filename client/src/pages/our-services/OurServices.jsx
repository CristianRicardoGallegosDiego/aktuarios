import React from "react";
import Services from "./Services.json";
import "./OurServices.css";

const OurServices = () => {
    return (
        <section>
            <div>
                <h1>Nuestros Servicios</h1>
                <div>
                    {
                        Services.map((service, index) => {
                            return (
                                <div key={index}>
                                    <h2>{service.title}</h2>
                                    <ul>
                                        {
                                            service.list.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default OurServices;