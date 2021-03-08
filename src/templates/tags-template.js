import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const TagTemplate = (props) => {
  console.log(props);
  const {pageContext:{tag}} = props
  const {data:{tags:{nodes:posts}}} = props
  return <Layout>
    <Posts posts={posts} title={`tag - ${tag}`}/>
  </Layout>
}

export const query = graphql`
query GetTags($tag: String) {
  tags: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tags: {eq: $tag}}}) {
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

export default TagTemplate
