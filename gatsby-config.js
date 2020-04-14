const dotenv = require('dotenv');
dotenv.config();

// In your gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-22488938-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields

        cookieDomain: 'arthursousa.com'
      }
    },
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 0.2 // Percentage of an element's area that needs to be visible to launch animation
      }
    },
    {
      resolve: 'gatsby-plugin-scroll-indicator',
      options: {
        // Configure color of the scroll indicator
        color: '#f87d50',
        // Height of the scroll indicator
        height: '5px'
        // Configure paths where the scroll indicator will appear
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Josefin+Sans'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isUsingColorMode: false
      }
    },

    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'l8528ram548z',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
