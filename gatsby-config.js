/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: 'RCOV1nCjMKbDcFGeymr2oQtt',
      homeSlug: 'home',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Karla:400,400i,700,700i`
        // `Roboto:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: 'en',
      langKeyForNull: 'en',
      prefixDefault: false,
      useLangKeyLayout: false,
    },
  }
],
}
