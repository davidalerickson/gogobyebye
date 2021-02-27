import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { graphql } from "gatsby"

export const pageQuery = graphql`
{
  tags: allMdx {
    group(field: frontmatter___tags){
      fieldValue
    }
    nodes {
      frontmatter {
        slug
        tags
      }
    }
  }
}
`


const Tags = ({data}) => {
  const {tags:{group: tags}} = data
  const {tags:{nodes: allPostTags}} = data

  console.log(allPostTags);


  const renderedTags = tags.map((tag, index) => {
    return (
      <li key={index}>{tag.fieldValue}</li>
    )
  })

  const slugsWithTags = allPostTags.filter(post => post.frontmatter.tags)

  console.log(slugsWithTags);


  return (
    <Layout>
      <SEO title={`tags`}/>
      <ul>
        {renderedTags}
      </ul>
    </Layout>
  )
}

export default Tags
