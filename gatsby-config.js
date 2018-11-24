module.exports = {
  siteMetadata: {
    siteUrl: `https://calhalbertcomedy.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cal Halbert',
        short_name: 'Cal Halbert',
        start_url: '/',
        background_color: '#333',
        theme_color: '#333',
        display: 'minimal-ui',
        icon: 'src/images/cal_icon.svg',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato', 'Squada One']
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`
  ],
}
