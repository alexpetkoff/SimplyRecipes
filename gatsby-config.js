/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipe site",
    author: "@AlexanderPetkov",
    person: { name: "Alexander", age: 31 },
    simpleData: ['item1', 'item2'],
    complexData: [
      { name: "Alexander", age: 31 }, { name: "John", age: 34 },
    ]
  },
  plugins:
    [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // The unique name for each instance
          name: `images`,
          // Path to the directory
          path: `${__dirname}/src/assets/`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `cvqx46h7snav`,
          accessToken: process.env.CONTENTFUL_API_KEY,
        },
      },
    ],
}