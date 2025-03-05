import { useState, useEffect } from "react";
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
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      {isVisible && (
        <button type="button" className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
