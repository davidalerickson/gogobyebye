import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Widgets/CarouselContainer'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        excerpt
      }
    }
  }
`


const IndexPage = ({data}) => {
  const {allMdx:{nodes:posts}} = data

  return <Layout>
 <Carousel/>
 <Posts posts={posts} title="recently published"/>

    </Layout>
}

export default IndexPage
