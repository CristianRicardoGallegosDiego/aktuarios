import React from "react";
import { 
  BrowserRouter as 
    Router, 
    Routes, 
    Route 
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import ScrollToTop from "./hooks/ScrollToTop";
import MainHeader from "./components/sections/headers/main-header/MainHeader.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import OurServices from "./pages/our-services/OurServices.jsx";
import NifD3 from "./pages/nif-d3/NifD3.jsx";
import Usgaap from "./pages/usgaap/Usgaap.jsx";
import Nic19 from "./pages/nic-19/Nic19.jsx";
import RetirementPensionPlans from "./pages/retirement-pension-plans/RetirementPensionPlans.jsx";
import SocialWelfare from "./pages/social-welfare/SocialWelfare.jsx";
import RetirementCounseling from "./pages/retirement-counseling/RetirementCounseling.jsx";
import Clients from "./pages/clients/Clients.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <NextUIProvider>
      <Router>
        <ScrollToTop />
        <MainHeader />
        <Routes>
          <Route path="/"                                                   element={<Home />} />
          <Route path="/nosotros"                                           element={<AboutUs />} />
          <Route path="/servicios"                                          element={<OurServices />} />
          <Route path="/servicios/pasivos-contingentes-laborales/nif-d3"    element={<NifD3 />} />
          <Route path="/servicios/pasivos-contingentes-laborales/usgaap"    element={<Usgaap />} />
          <Route path="/servicios/pasivos-contingentes-laborales/nic-19"    element={<Nic19 />} />
          <Route path="/servicios/planes-pensiones-por-jubilacion"          element={<RetirementPensionPlans />} />
          <Route path="/servicios/prevision-social"                         element={<SocialWelfare />} />
          <Route path="/servicios/asesoria-para-el-retiro"                  element={<RetirementCounseling />} />
          <Route path="/clientes"                                           element={<Clients />} />
          <Route path="/contactanos"                                        element={<ContactUs />} />
          <Route path="*"                                                   element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </NextUIProvider>
  );
};

export default App;