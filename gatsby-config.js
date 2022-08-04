/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["job", "project"],
  singleTypes: ["about"],
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Webdev portfolio`,
    description: `WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Webdev Portfolio`,
    twitterUsername: `@Claudiufpopa`,
    image: "/mainImg.png",
    siteUrl: `https://elaborate-tulumba-a4d7f3.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
