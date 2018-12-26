import React from 'react';

import Footer from '../components/layout/Footer';

const Contact = () => (
  <>
    <h1>How to contact me.</h1>
    {/* Use Formspree */}
    <form>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          name="name"
          type="text"
          required
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </label>
      <label htmlFor="subject">
        Subject:
        <input
          id="subject"
          name="subject"
          type="text"
          required
        />
      </label>
      <label htmlFor="message">
        Message:
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          required
        />
      </label>
      <button
        type="submit"
      >
        Send
      </button>
    </form>
    <Footer />
  </>
);

export default Contact;
