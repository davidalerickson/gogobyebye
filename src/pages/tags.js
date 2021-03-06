import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { graphql } from "gatsby"

export const pageQuery = graphql`
{
  tags: allMdx {
    group(field: frontmatter___tags){
      fieldValue
      totalCount
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
  const {tags:{group: tags}, tags:{group: totalCount}} = data
  const {tags:{nodes: allPostTags}} = data

  console.log(allPostTags);
  console.log(totalCount);


  const renderedTags = tags.map((tag, index) => {
    return (
      <li key={index}>{tag.fieldValue} - count: {tag.totalCount}</li>
    )
  })

  const slugsWithTags = allPostTags.filter(post => post.frontmatter.tags)

  const renderedPostWithTagsAndSlugs = slugsWithTags.map((slugAndTag, index) => {
    return <>
      <h1>{slugAndTag.frontmatter.slug}</h1>
      <ul>
        {slugAndTag.frontmatter.tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>

    </>
  })

  console.log(slugsWithTags);


  return (
    <Layout>
      <SEO title={`tags`}/>
      <ul>
        {renderedTags}
        {renderedPostWithTagsAndSlugs}
      </ul>
    </Layout>
  )
}

export default Tags
