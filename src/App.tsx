import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Components/Header/Header.css";
import "./Components/Footer/Footer.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Pages/AboutPage/About";
import Contact from "./Components/Pages/ContactPage/Contact";
import HomePage from "./Components/Pages/HomePage/Home";
import Services from "./Components/Pages/ServicePage/Services";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
