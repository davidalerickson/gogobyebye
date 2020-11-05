import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

// const buildQueryString = (imageQueryString) => {
//     return `
//     {
//         allFile(filter: {sourceInstanceName: {eq: "posts"}, relativePath: {regex: "/${imageQueryString}.*(jpg||jpeg)/"}}) {
//           edges {
//             node {
//               id
//               sourceInstanceName
//               relativePath
//             }
//           }
//           nodes {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     `
// }

const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "posts"}, relativePath: {regex: "/^2018-10-03-si/"}, extension: {regex: "/jpg/"}}) {
    edges {
      node {
        id
        sourceInstanceName
        relativePath
      }
    }
    nodes {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

// Need to pass in ImageString for image as a prop and construct the query.

const ShowImage = () => {
    const data = useStaticQuery(query)
    const {allFile:{nodes:{0:{childImageSharp:{fluid}}}}} = data
    console.log(fluid);
    // data.allFile.nodes.map(item => {
    //     console.log(item);
    // })

    return (
        <div>
                    <Image fluid={fluid} className="img"></Image>
        </div>
    )
}



export default ShowImage




