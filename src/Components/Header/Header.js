import React from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/logo.png";
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
        <nav className="nav">
          <li>
            <a href="/design">Home</a>
          </li>
          <li>
            <a href="/strategy">About</a>
          </li>
          <li>
            <a href="/cases">Showcase</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </nav>
        <div className="hamburger-menu">
          <span className="burger"></span>
          <span className="burger"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
