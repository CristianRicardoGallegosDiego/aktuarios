import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PersonCard.css";

const PersonCard = (props) => {
    const {
        id,
        image,
        name,
        description,
        socialMedia
    } = props;

    const cvRoute = `/nosotros/equipo/${id}`;

    return (
        <div className="person-card-container">
            <div className="person-card-background"></div>
            <div className="picture-container">
                <Link to={cvRoute}>
                    <img src={image} alt="person" />
                </Link>
            </div>
            <div className="info-person-card-container">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <ul>
                <li>
                    <Link to={cvRoute}>
                        <FontAwesomeIcon icon="fa-solid fa-file" />
                    </Link>
                </li>
                <li>
                    <a href={socialMedia[0]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                    </a>
                </li>
                <li>
                    <a href={socialMedia[1]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    </a>
                </li>
                <li>
                    <a href={socialMedia[2]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default PersonCard;