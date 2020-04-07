const dotenv = require('dotenv');
dotenv.config();

// In your gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-plugin-scroll-indicator',
      options: {
        // Configure color of the scroll indicator
        color: '#ff6f4f',
        // Height of the scroll indicator
        height: '5px',
        // Configure paths where the scroll indicator will appear
        paths: ['/'],
        // Configure the z-index of the indicator element
        zIndex: '9999'
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
