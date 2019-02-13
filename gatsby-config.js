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
        link: '/who-I-am',
      },
      {
        name: 'What I do',
        link: '/what-I-do',
      },
      {
        name: 'What I did',
        link: '/what-I-did',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Benoît Gelineau Portfolio",
        short_name: "BG Portfolio",
        start_url: "/",
        background_color: "#263973",
        theme_color: "#263973",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout`),
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
