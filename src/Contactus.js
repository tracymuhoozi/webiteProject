// import React from "react";
import "./Contactus.css";
// import { useState} from "react"
import { db } from "./firebase";
import React, { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,

} from "firebase/firestore"

import {

    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("")
    setSuccess("");


    try{
      await addDoc(collection(db, "contactMessages"), {
        name,
        email,
        subject,
        message,
        status: "unread",
        createdAt: serverTimestamp(),
      });

      setSuccess("Message sent successfully");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("")
    } catch (err) {
      setError("failed to send message");
      console.log(err);
    }  finally{
      setLoading(false);
    }
  }

    return (

        <section className="contact">

            <div className="contact-header">

                <h1>Get In Touch</h1>
                <p>
                We'd love to hear from you. Whether you have a question, suggestion,
                or need assistance, our team is always ready to help.
                </p>
            </div>

            <div className="contact-container">

            <div className="contact-info">

                <h2>Get In Touch</h2>


                <div className="info-box">
                    <FaPhoneAlt className="icon" />
                <div>
                    <h4>Phone</h4>
                    <p>+256 700 123 456</p>
                </div>
            </div>

            <div className="info-box">
                <FaEnvelope className="icon" />
            <div>
                <h4>Email</h4>
                <p>info@shineupsacco.com</p>
            </div>
        </div>

        <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
                <h4>Location</h4>
                <p>Kabale, Uganda</p>
            </div>
        </div>

        <div className="info-box">
            <FaClock className="icon" />
        <div>
            <h4>Working Hours</h4>
            <p>Mon - Fri : 8:00 AM - 5:00 PM</p>
        </div>
    </div>

    <div className="socials">

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name} onChange={(e)=>setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              required
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
            ></textarea>

            {success && <p className="success">{success}</p>}

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "sending..." : "send message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;