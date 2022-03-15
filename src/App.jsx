import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Potrfolio from "./components/portfolio/Portfolio.jsx";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Potrfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
