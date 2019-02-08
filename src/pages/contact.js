import React from 'react';

import SEO from '../components/seo';
import { NavbarContext } from '../utils/context';

import styles from '../styles/pages/contact.module.scss';

const Contact = () => (
  <div className={styles.container}>
    <SEO title="Contact" />
    <h1>How to contact me.</h1>
    <NavbarContext.Consumer>
      {({ showNav }) => (
        <form
          id={styles.contact_form}
          name="contact"
          method="POST"
          action="/no-cache=1"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >
          {/* Spam filtering from Netlify */}
          <input type="hidden" name="bot-field"/>

          <label htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            required
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
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
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
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
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
          />
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            // Disable wheel event for navigation
            // onScroll={setWheelNavigation(false)}
            required
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
          />
          <button
            type="submit"
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
          >
            Send
          </button>
        </form>
      )}
    </NavbarContext.Consumer>
  </div>
);

export default Contact;
