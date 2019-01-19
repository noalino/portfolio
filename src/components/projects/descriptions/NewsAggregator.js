import React from 'react';

const NewsAggregator = () => (
  <>
    <p>
      I wanted to be able to read news or blog posts from a single website, so I built this web app with <strong>News API</strong>.
    </p>
    <p>
      Along the way, I had to learn <strong>React Router</strong> to make navigation easier, <strong>Redux</strong> to better manage state between components, and <strong>Webpack</strong> to bundle all the files.
    </p>
    <p>
      However, the biggest challenge for me was to implement a secure authentication. Eventually, I decided to go for a JSON web token authentication with the help of <strong>PassportJS</strong>.
    </p>
  </>
);

export default NewsAggregator;
