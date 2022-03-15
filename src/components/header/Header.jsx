import React from "react";
import "./Header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/me5.png";
import Headersocials from "./Headersocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Rohan Chaulagain</h1>
        <h5 className="text-light">Student</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <Headersocials />
      </div>
    </header>
  );
};

export default Header;
