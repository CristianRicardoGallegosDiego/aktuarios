import React from "react";
import { Link } from "react-router-dom";
import "./LinksContainer.css";

const LinksContainer = () => {
    return (
        <div className="links-container">
            <h3>Normatividad</h3>
            <div>
                <Link to="/servicios/pasivos-contingentes-laborales/nif-d3">
                    NIF D-3
                </Link>
                <Link to="/servicios/pasivos-contingentes-laborales/usgaap">
                    USSGAAP
                </Link>
                <Link to="/servicios/pasivos-contingentes-laborales/ias">
                    IAS
                </Link>
            </div>
        </div>
    );
};

export default LinksContainer;