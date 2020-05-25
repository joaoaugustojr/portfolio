
const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Sans Serif', 'Roboto', 'Roboto Black']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfólio - João Augusto`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#545454`,
        theme_color: `#545454`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#00C59D`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        outputStyle: `compressed`,
        browserslist: `last 6 version`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ]
}
