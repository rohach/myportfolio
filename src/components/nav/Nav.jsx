import React from "react";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillBookmarkStarFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#gallery"
        onClick={() => setActiveNav("#gallery")}
        className={activeNav === "#gallery" ? "active" : ""}
      >
        <FaImages />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FaUsers />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};
export default Nav;
