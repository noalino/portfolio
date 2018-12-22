import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Home = () => (
  <Layout>
    {/* <SEO title="Home" keywords={['gatsby', 'application', 'react']} /> */}
    <h1>BENOIT GELINEAU</h1>
    <h2>FULL STACK JAVASCRIPT DEVELOPER</h2>
    <h3>REACT | NODE | EXPRESS | MONGODB</h3>
    <button
      type="button"
    >
      CONTACT ME
    </button>
    <div>
      <img alt="GitHub" />
      <img alt="LinkedIn" />
      <img alt="Twitter" />
    </div>
    {/* <Link to="/who-I-am/">Go to Who I Am</Link>
    <Link to="/what-I-do/">Go to What I Do</Link>
    <Link to="/what-I-did/">Go to What I Did</Link>
    <Link to="/contact/">Go to Contact</Link> */}
  </Layout>
);

export default Home;
