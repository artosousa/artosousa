const dotenv = require('dotenv')
dotenv.config()

// In your gatsby-config.js
module.exports = {
    plugins: [
        "gatsby-plugin-chakra-ui",
        {
            resolve: `gatsby-source-contentful`,
            options: {
            spaceId: `l8528ram548z`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        ],
    
  }