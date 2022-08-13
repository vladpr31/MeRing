import React from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/logo.png";
import { Link } from "react-scroll";

import "./Header.css";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        delay: 0,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">
          m<img src={logo}></img>ing
        </div>
        <nav className="navBar">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="showcase"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Showcase
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="subscription"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
