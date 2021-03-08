import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const TagTemplate = (props) => {
  console.log(props);
  const {pageContext:{tag}} = props
  // const {data:{categories:{nodes:posts}}} = props
  return <Layout>
    <h1>Hello from Tag template</h1>
    {/* <Posts posts={posts} title={`category/${category}`}/> */}
  </Layout>
}

// export const query = graphql`
// query GetCategories($category: String) {
//   categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
//     nodes {
//       frontmatter {
//         title
//         author
//         category
//         date(formatString: "MMMM Do, YYYY")
//         slug
//         readTime
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       id
//       excerpt
//     }
//   }
// }

// `

export default TagTemplate
