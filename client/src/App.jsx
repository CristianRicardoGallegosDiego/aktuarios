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
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </NextUIProvider>
  );
};

export default App;