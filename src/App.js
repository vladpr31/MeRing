import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/AboutServices/Services";
import About from "./Components/About/About";
import Showcase from "./Components/Showcase/Showcase";
import Footer from "../src/Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Showcase />
    </>
  );
};

export default App;
