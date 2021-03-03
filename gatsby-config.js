module.exports = {
  siteMetadata: {
    title: "gatsby-site-2",
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `blog`,
              path: `${__dirname}/blog/`,
          },
      }
  ],
};
