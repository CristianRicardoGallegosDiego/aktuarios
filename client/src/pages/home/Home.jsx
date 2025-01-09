import React from "react";
import { Link } from "react-router-dom";
import Circle1 from "../../assets/images/home/circle1.png";
import Circle2 from "../../assets/images/home/circle2.png";
import "./Home.css";
import 'swiper/css';
import { 
    Swiper, 
    SwiperSlide 
} from 'swiper/react';
import { 
    Autoplay, 
    Pagination, 
    Navigation 
} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Carousel2 from "../../assets/images/home/carousel1.jpeg";
import Carousel1 from "../../assets/images/home/carousel2.jpeg";
import Carousel3 from "../../assets/images/home/carousel3.jpeg";

const Home = () => {
    return (
        <section className="home-container">
            <section className="banner-container">
                <h1>Expertos en Servicios Actuariales: Soluciones Precisas y Confiables</h1>
                <p>En Aktuarios Desarrollo Actuarial S. C. nos dedicamos a proporcionar servicios innovadores y de alta calidad, apoyados por herramientas y tecnologías de vanguardia.</p>
                <Link to="/contactanos">Cotizar estudio</Link>
            </section>
            <section className="title">
                <h2>¡Bienvenido a <em>Aktuarios!</em></h2>
            </section>
            <section className="more-info-container">
                <div>
                    <p><b>S</b>omos un grupo de actuarios que ofrecen <strong>soluciones</strong> por medio de <strong>lineamientos actuariales, financieros y contables</strong>, con la finalidad de que las empresas reconozcan sus pasivos contingentes y les permita tomar de manera oportuna las <strong>mejores decisiones organizacionales</strong>, lo cual se vea reflejado en la <strong>rentabilidad</strong> de la Compañía.</p>
                    <img src={Circle1} alt="Imagen de la empresa" />
                </div>
                <div>
                    <img src={Circle2} alt="Imagen de la empresa" />
                    <p><b>E</b>stamos comprometidos a proporcionar una <strong>asesoría del más alto nivel de calidad</strong>, a través de un <strong>servicio personalizado</strong>, herramientas de comunicación y a través de un equipo de expertos con iniciativa, receptivo y con una <strong>amplia experiencia como Asesores y/o Auditores</strong>.</p>
                </div>
            </section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-container">
                        <img src={Carousel1} alt="Imagen de la empresa" />
                        <Link to="/webinar/registro" className="cta-button">Ir al Webinar</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carousel2} alt="Imagen de la empresa" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carousel3} alt="Imagen de la empresa" />
                </SwiperSlide>
            </Swiper>
            <section className="acknowledgments-container">
                <h2>Gracias por confiar en nosotros, estamos aquí para acompañarlos en su crecimiento.</h2>
            </section>
        </section>
    );
};

export default Home;