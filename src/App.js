import React from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import WhatsApp from "./Components/WhatsApp";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import CurrentWork from "./Components/CurrentWork";
import Resume from "./Components/Resume";
import { data } from "./Data";

const App = () => {
  return (
    <>
      <NavBar />
      <Header data={data.header} />
      <About data={data.about.description} carrousel={data.about.grades} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio.projects} />
      <CurrentWork data={data.portfolio.currentWork} />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default App;
