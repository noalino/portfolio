import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutMe = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <h1>Who I Am.</h1>
    <div>
      <img alt="Benoît Gelineau" />
    </div>
    <p>I am a self-taught web developer based in Cholet, France and I enjoy building web applications from scratch when I am not playing drums.</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default AboutMe;
