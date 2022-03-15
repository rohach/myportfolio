import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ROHAN CHAULAGAIN
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/rohan.chaulagain.5">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/rohanchaulagain/">
          <AiFillInstagram />
        </a>
        <a href="https://facebook.com/rohan.chaulagain.5">
          <ImYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ROHAN CHAULAGAIN. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
