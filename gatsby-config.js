module.exports = {
  siteMetadata: {
    title: 'Benoît Gelineau - Web Developer',
    description: 'Full stack JavaScript developer enjoying creating web applications from scratch.',
    author: 'Benoît Gelineau',
    twitter: '@benoit_gelineau',
    siteName: 'benoitgelineau.com',
    url: 'www.benoitgelineau.com',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Who I am',
        link: '/who-i-am',
      },
      {
        name: 'What I do',
        link: '/what-i-do',
      },
      {
        name: 'What I did',
        link: '/what-i-did',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout`),
      },
    },
  ],
};
