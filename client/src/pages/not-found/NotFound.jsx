import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <h1>
                ¿Dónde Está el Mapa? Página Extraviada
            </h1>
            <p>
                ¡Vaya! Estamos arreglando algo mágico. Explora mientras tanto.
            </p>
            <Link to="/">
                Vuelve al Viaje
            </Link>
        </div>
    );
};

export default NotFound;