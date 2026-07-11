import React from "react";
import "./Founders.css";

import founder1 from "./assets/Frankk.jpg";
import founder2 from "./assets/tracym.jpg";
import founder3 from "./assets/cosams.jpg";
import founder4 from "./assets/tracya.jpg";
import founder5 from "./assets/john.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const founders = [
  {
    image: founder1,
    name: " Kasita Frank",
    title: "Chief Executive Officer",
    description:
      "Frank is passionate about empowering communities through financial inclusion and innovative SACCO solutions.",
    whatsapp: "#",
    instagram: "#",
    linkedin: "#",
    X: "#",
  },
  {
    image: founder2,
    name: "Muhoozi Tracy",
    title: "Operations Director",
    description:
      "Tracy oversees the day-to-day operations ensuring members receive reliable and efficient financial services.",
    whatsapp: "#",
    instagram: "#",
    linkedin: "#",
    X: "#",
  },
  {
    image: founder3,
    name: "Kaduuma Cosmas Allan",
    title: "Finance Director",
    description:
      "Cosmas provides strategic financial leadership and ensures sustainable growth for the SACCO.",
    whatsapp: "#",
    linkedin: "#",
    X: "#",
  },
  {
    image: founder4,
    name: "Amutuhaire Tracy",
    title: "Technology Director",
    description:
      "Tracy leads digital innovation, making financial services accessible through modern technology.",
    whatsapp: "#",
    instagram: "#",
    linkedin: "#",
    X: "#",
  },
  {
    image: founder5,
    name: "Ahumuza Johnbaptist",
    title: "Marketing Director",
    description:
      "John drives awareness and member engagement through strategic marketing and partnerships.",
    whatsapp: "#",
    instagram: "#",
    linkedin: "#",
    X: "#",
  },
];

function Founders() {
    return (
        <section className="founders-section">

        <div className="founders-header">

            <h1>Meet Our Founders</h1>
            <p>
                The visionary leaders behind ShineUp SACCO, committed to building
                financial empowerment, trust, and innovation for every member.
            </p>
        </div>

        <div className="founders-container">
        {founders.map((founder, index) => (
            <div className="founder-card" key={index}>
                <div className="image-container">
                    <img src={founder.image} alt={'$founder.name} - ${founder.title}'} />
                </div>

                <h2>{founder.name}</h2>

                <span>{founder.title}</span>

                <p>{founder.description}</p>

            <div className="social-icons">
              <a href={founder.whatsapp} aria-label="Whatsapp">
                <FaWhatsapp />
              </a>

              <a href={founder.instagram} aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href={founder.linkedin} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href={founder.X} aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Founders;