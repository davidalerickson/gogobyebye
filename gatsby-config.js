module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider-images`,
        path: `${__dirname}/src/assets/slider-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `go_go_bye_bye`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variable: true,
            weights: ['200..900']
          }
        ]
      }
    },
  ],
}
