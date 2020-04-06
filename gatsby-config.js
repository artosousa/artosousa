const dotenv = require('dotenv')
dotenv.config()

// In your gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-chakra-ui',
            options: {
              isUsingColorMode: false
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [],
            },
        },
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