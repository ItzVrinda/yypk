import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logoyoga.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on click
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      if (location.pathname !== "/") {
        window.location.href = "/#contact-us";
      }
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when any link is clicked
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Yoga Studio Logo" className={styles.logo} />
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/classes" onClick={handleLinkClick}>
            Classes
          </Link>
        </li>
        <li>
          <Link to="/corporate" onClick={handleLinkClick}>
            Corporate Batches
          </Link>
        </li>
        <li>
          <Link to="/health" onClick={handleLinkClick}>
            Yoga for Health
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <a href="#contact-us" onClick={handleContactClick}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
