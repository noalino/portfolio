import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Work = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <h1>What I Do.</h1>
    <div>
      <div>
        <img src="" alt="design" />
        <h4>Design</h4>
        <ul>
          <li>Pen &amp; Paper</li>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
        <p>My mantra/motto: the simpler the better. I design clean user interfaces  that help conveying the message that you want to send.</p>
      </div>
      <div>
        <img src="" alt="develop" />
        <h4>Develop</h4>
        <ul>
          <li>VS Code</li>
          <li>Terminal</li>
          <li>GitHub</li>
          <li>CodePen</li>
          <li>Postman</li>
        </ul>
        <p>I know how to create your website to run across browsers and devices using the latest technologies available.</p>
      </div>
      <div>
        <img src="" alt="deploy" />
        <h4>Deploy</h4>
        <ul>
          <li>Git</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>mLab</li>
        </ul>
        <p>Before making/putting it live on the Internet, I optimize your website to ensure user experience is as flawless as possible.</p>
      </div>
    </div>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default Work;
