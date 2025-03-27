import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import "./app.scss";
import Hero from "./Pages/Home/Hero";
import About from "../src/Pages/About/About"
import Services from "./Pages/MyServices/MyServices";
import MyWork from "./Pages/MyWork/MyWork";
import Contact from "./Pages/Contact/Contact";
import Others from "./Pages/Others/Others";
import MainLayout from "./Mainlayout/MainLayout";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/Token/Token";

const routes = [
  { path: "/personal-portfolio/home", element: <Hero /> },
  { path: "/personal-portfolio/about", element: <About /> },
  { path: "/personal-portfolio/services", element: <Services /> },
  { path: "/personal-portfolio/work", element: <MyWork /> },
  { path: "/personal-portfolio/contact", element: <Contact /> },
  { path: "/personal-portfolio/others", element: <Others />}
];

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
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
      <Routes>
      <Route path="/personal-portfolio/login" element={<Login />} />
        <Route
          path="/personal-portfolio/"
          element={<Navigate to="/personal-portfolio/login" />}
        />
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<ProtectedRoute><MainLayout>{element}</MainLayout></ProtectedRoute>} />
        ))}
      </Routes>
      {isVisible && (
        <button type="button" className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </Router>
  );
}

export default App;
