import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./Components/Header/Header.css";
import "./Components/Footer/Footer.css";
import "./Components/Pages/HomePage/Home.css";
import "./Components/Pages/AboutPage/About.css";
import "./Components/Pages/ServicePage/Services.css";
import "./Components/Pages/ContactPage/Contact.css";
import "./Animation.css";
import "./Components/ReturnToTop/ReturnToTop.css";
import "./Components/Header/Hamburger/Hamburger.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Pages/AboutPage/About";
import Contact from "./Components/Pages/ContactPage/Contact";
import HomePage from "./Components/Pages/HomePage/Home";
import Services from "./Components/Pages/ServicePage/Services";
import ReturnToTop from "./Components/ReturnToTop/ReturnToTop";
import Hamburger from "./Components/Header/Hamburger/Hamburger";

function App() {
    const [toggleHamburger, setToggleHamburger] = useState(false);
    const [scrollPosition, setScrollPosition] = useState();

    const openCloseHamburger = () => {
        setToggleHamburger(!toggleHamburger);
    };

    const closeHamburger = () => {
        setToggleHamburger(false);
    };

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    }, []);

    return (
        <div className="App">
            <Header toggleHamburger={openCloseHamburger} />
            <Hamburger
                closeHamburger={closeHamburger}
                isShown={toggleHamburger}
            />
            <ReturnToTop position={scrollPosition} />
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
