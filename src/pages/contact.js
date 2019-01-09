import React from 'react';

// import Footer from '../components/layout/Footer';

import styles from '../styles/pages/contact.module.scss';

const Contact = () => (
  <div className={styles.container}>
    <h1>How to contact me.</h1>
    <form
      id={styles.contact_form}
      action="https://formspree.io/bgelineau.dev@gmail.com"
      method="POST"
    >
      <label htmlFor="name">
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="off"
        required
      />
      <label htmlFor="email">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="off"
        required
      />
      <label htmlFor="subject">
        Subject:
      </label>
      <input
        id="subject"
        name="subject"
        type="text"
        autoComplete="off"
        required
      />
      <label htmlFor="message">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        required
      />
      <button
        type="submit"
      >
        Send
      </button>
    </form>
    {/* <Footer /> */}
  </div>
);

export default Contact;
