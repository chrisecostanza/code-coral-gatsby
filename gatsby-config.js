module.exports = {
  siteMetadata: {
    title: `Code Coral`,
    description: `Code Coral website`,
    author: `@chrisecostanza`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-152563141-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Coral`,
        short_name: `Code Coral`,
        start_url: `/`,
        background_color: `#ff785d`,
        theme_color: `#ff785d`,
        display: `standalone`,
        icon: `src/images/code-coral-favicon.png`,
        cache_busting_mode: `query`
      },
    },
    `gatsby-plugin-offline`,
  ],
}
