import React from "react";
import "./Services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Best Performing CTA buttons.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> CTA on Mobile.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Primary Action Buttons.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Image Overlaying.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Error Messages.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Good use of Icons.</p>
            </li>
          </ul>
        </article>
        {/* END OF FIRST ARTICLE */}
        <article className="services">
          <div className="service__head">
            <h3>WEB Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Well Designed and Functional.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Easy to Use.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Optimized for Mobiles.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Fresh and Quality Content.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Clear calls to actions.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Readily accessible content and location.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Great Usability.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPEMENT */}
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Readable.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Engaging.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Consistent.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Findable.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Translatable</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Finely researched work.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
