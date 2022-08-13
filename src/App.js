import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/AboutServices/Services";
import About from "./Components/About/About";
import Showcase from "./Components/Showcase/Showcase";
import Subscription from "./Components/Subscription/Subscription";
import Footer from "../src/Components/Footer/Footer";
const App = () => {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="subscription">
        <Subscription />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default App;
