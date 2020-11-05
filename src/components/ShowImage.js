import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "posts"}, relativePath: {regex: "/2018-10-03.*(jpg||jpeg)/"}}) {
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
            src
          }
        }
      }
    }
  }
`

const ShowImage = () => {
    const data = useStaticQuery(query)
    console.log(data);
    return (
        <div>
            Image goes here
        </div>
    )
}



export default ShowImage
