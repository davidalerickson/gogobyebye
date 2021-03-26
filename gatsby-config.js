module.exports = {
  siteMetadata:{
    title: `GoGoByeBye - Travel the world with David and Carmela`,
    description: `Traveling by train, plane, automobile, camper and occasional boat. David and Carmela take you there.`, 
    titleTemplate: `%s | GoGoByeBye Travel Blog`,
    url: `https://gogobyebye.com`,
    image: `/images/gogobyebye_logo`,
    twitterUsername: `@gogobyebye1`
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    `gatsby-plugin-lodash`,
    
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
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
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
