import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/SEO'


const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data
  return <Layout>
    <SEO title={`Posts`}/>
     <Posts posts={posts} title="All Posts"/>
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          tags
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

export default PostsPage
