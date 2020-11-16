import React from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import ShowImage from '../components/ShowImage'

const query = graphql`
{
    images: allFile(filter: {sourceInstanceName: {eq: "posts"}, extension: {regex: "/jpeg|jpg|png|gif/"}}) {
      nodes {
        relativePath
        extension
        sourceInstanceName
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const GetImages = ({blogDate}) => {
  console.log(blogDate);
    const data = useStaticQuery(query)
    const {images:{nodes}} = data
    const filteredNodes = nodes.filter((nodeImage, index) => {
      return nodeImage.relativePath.startsWith(blogDate) && nodeImage.relativePath.includes('grid-images')
    })
    console.log(filteredNodes);
    const filteredNodeImages = filteredNodes.map((image, index) => {
      const {childImageSharp:{fluid}} = image
      return fluid
    })
    console.log(filteredNodeImages);
    return (
        <div>
            Get Images Component
            <ShowImage images={filteredNodeImages} />
        </div>
    )
}

export default GetImages
