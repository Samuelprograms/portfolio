import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";
import "./../css/NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const menus = [
    { href: "home", title: "Home" },
    { href: "about", title: "About" },
    { href: "resume", title: "Career" },
    { href: "portfolio", title: "Projects" },
    { href: "contact", title: "Get in touch" },
  ];
  const transitionNav = () => {
    setShowNav(window.scrollY > 100 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  return (
    <nav className={`navbar ${showNav && "navbar__black"}`}>
      <FontAwesomeIcon
        className="nav-icon"
        icon={open ? faEyeSlash : faEye}
        onClick={() => setOpen(!open)}
      />
      <ul className={open ? "nav-links active" : "nav-links"}>
        {menus.map((menu, index) => (
          <li key={index} className="nav-item">
            <Link
              activeClass="nav-link-active"
              className="nav-link"
              to={menu.href}
              spy={true}
              smooth={true}
              duration={700}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
