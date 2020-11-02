/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: 'vGsNXj86XGJjyO7bFWw8Mgtt',
      homeSlug: 'home',
      version: process.env.NODE_ENV === 'production' ? 'production' : 'draft'
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Merriweather:400,700`,
        `Roboto:300,400,400i,700` // you can also specify font weights and styles
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
