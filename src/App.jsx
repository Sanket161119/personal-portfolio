import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import MyWork from "./Components/my-work/MyWork";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="//personal-portfolio/" element={<Hero />} />
        <Route path="/personal-portfolio/hero" element={<Hero />} />
        <Route path="/personal-portfolio/about" element={<About />} />
        <Route path="/personal-portfolio/services" element={<Services />} />
        <Route path="/personal-portfolio/work" element={<MyWork />} />
        <Route path="/personal-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {isVisible && (
        <button type="button" className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </Router>
  );
}

export default App;
