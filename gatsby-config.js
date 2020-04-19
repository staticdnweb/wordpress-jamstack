/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
       resolve: 'gatsby-source-graphql',
       options: {
         typeName: 'WPGraphQL',
         fieldName: 'wpgraphql',
         url: 'http://test1.demo.hoangdata.com/graphql',
       }
    }
  ]
}
