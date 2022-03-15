import React from "react";
import "./Testimonials.css";
import client from "../../assets/san.jpg";
import client1 from "../../assets/sand.jpg";
import client2 from "../../assets/manoj.jpg";
import client3 from "../../assets/rochal.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: client,
    name: "Sangeet Poudel",
    review:
      "Rohan is energetic, hardworking and talented boy. He is a talented as well as supportive friend.",
  },
  {
    avatar: client1,
    name: "Sandeep Chaudhary",
    review:
      "Talking about Rohan, working with him is really a nice and perfect opportunity. I learnt a lot on details while working with him ",
  },
  {
    avatar: client2,
    name: "Manoj Pauldel",
    review:
      "Rohan not only does his work perfectly on time, but also helps us to do our tasks. In the span of 2 years, it is honor to meet him. ",
  },
  {
    avatar: client3,
    name: "Rochak Bhushal",
    review:
      "Not only on his studies, he is excillent in group projects. He contributed many times in group works and projects and helped us to succeed.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
