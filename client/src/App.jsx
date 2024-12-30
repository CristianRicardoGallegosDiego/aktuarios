import React from "react";
import { 
  BrowserRouter as 
    Router, 
    Routes, 
    Route 
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { 
  SnackbarProvider,
} from "notistack";
import ScrollToTop from "./hooks/ScrollToTop";
import MainHeader from "./components/sections/headers/main-header/MainHeader.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import OurServices from "./pages/our-services/OurServices.jsx";
import NifD3 from "./pages/nif-d3/NifD3.jsx";
import Usgaap from "./pages/usgaap/Usgaap.jsx";
import IAS from "./pages/ias/IAS.jsx";
import ActuarialValuationAndReviewOfLaborLiabilities from "./pages/actuarial-valuation-and-review-of-labor-liabilities/ActuarialValuationAndReviewOfLaborLiabilities.jsx";
import RetirementPlan from "./pages/retirement-plan/RetirementPlan.jsx";
import OtherServices from "./pages/other-services/OtherServices.jsx";
import Clients from "./pages/clients/Clients.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      
    >
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
            <Route path="/servicios/pasivos-contingentes-laborales/ias"       element={<IAS />} />
            <Route path="/servicios/valuacion-actuarial-y-revision-de-los-pasivos-laborales"          element={<ActuarialValuationAndReviewOfLaborLiabilities />} />
            <Route path="/servicios/plan-de-retiro"                         element={<RetirementPlan />} />
            <Route path="/servicios/otros-servicios"                  element={<OtherServices />} />
            <Route path="/clientes"                                           element={<Clients />} />
            <Route path="/contactanos"                                        element={<ContactUs />} />
            <Route path="*"                                                   element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </NextUIProvider>
    </SnackbarProvider>
  );
};

export default App;