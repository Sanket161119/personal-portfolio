import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const menuItems = [
  { path: "/personal-portfolio/home", label: "Home" },
  { path: "/personal-portfolio/about", label: "About" },
  { path: "/personal-portfolio/services", label: "Services" },
  { path: "/personal-portfolio/work", label: "Work" },
  { path: "/personal-portfolio/contact", label: "Contact" },
  { path: "/personal-portfolio/others", label: "Others" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();
  const location = useLocation(); // gets the current pathname of the route
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/personal-portfolio/");
  };

  useEffect(() => {
    const path = location.pathname.split("/").pop(); // extracting the last path name
    setMenu(path || "home");
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
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link to={item.path} className="anchor-link">
              <p>{item.label}</p>
            </Link>
            {menu === item.label.toLowerCase() ? (
              <img src={underline} alt="" />
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
      <div className="logout">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
