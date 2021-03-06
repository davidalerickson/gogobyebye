import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = (props) => {
  const {pageContext:{category}} = props
  const {data:{categories:{nodes:posts}}} = props
  return <Layout>
    <Posts posts={posts} title={`category/${category}`}/>
  </Layout>
}

export const query = graphql`
query GetCategories($category: String) {
  categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
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

export default CategoryTemplate
