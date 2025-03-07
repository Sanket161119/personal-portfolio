import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();
  const location = useLocation(); // gets the current pathname of the route

  useEffect(() => {
    const path = location.pathname.split("/").pop(); // extracting last path name here  its "contact"
    setMenu(path || "hero"); 
  }, [location]);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <Link to="/personal-portfolio/hero" className="anchor-link">
            <p>Home</p>
          </Link>
          {menu === "hero" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="/personal-portfolio/about" className="anchor-link">
            <p>About me</p>
          </Link>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="/personal-portfolio/services" className="anchor-link">
            <p>Service</p>
          </Link>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="/personal-portfolio/work" className="anchor-link">
            <p>Portfolio</p>
          </Link>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link to="/personal-portfolio/contact" className="anchor-link">
            <p>Contact</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
