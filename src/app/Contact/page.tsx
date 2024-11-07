"use client";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

export default function Contact() {
  const notify = () => toast("Submit...");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dbda848b-a2a9-4954-88c7-5e5362feae49");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <section className="contact-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={480}
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                id="name"
                name="name"
                required
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-textarea"
                id="message"
                rows={3}
                name="message"
                required
                placeholder="Contact me"
              />
            </div>
            <button
              onClick={notify}
              type="submit"
              className="submit-button"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </section>
    </>
  );
}
