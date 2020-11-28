/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gt5dpbjkpfc7`,
        accessToken: `D3gpmfIsMAeVseWHQ7occIxBZhw4IRa2zX46_rKGUVk`,
      },
    },
  ],
}
