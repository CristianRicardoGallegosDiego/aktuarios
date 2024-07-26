import React from "react";
import { 
  BrowserRouter as 
    Router, 
    Routes, 
    Route 
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/sections/header/Header.jsx";
import Footer from "./components/sections/footer/Footer";
import Home from "./pages/home/Home";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import NotFound from "./pages/not-found/NotFound";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <NextUIProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </NextUIProvider>
  );
};

export default App;