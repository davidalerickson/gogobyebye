import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


const query = graphql`
{
    allFile(filter: {sourceInstanceName: {eq: "slider-images"}, childImageSharp: {fluid: {}}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Slider = () => {
    const {allFile:{edges}} = useStaticQuery(query)
    const fluid = edges[0].node.childImageSharp.fluid
    
    return (
        <div className="slider-container">
        <Image fluid={{...fluid, aspectRatio: 21/9}} />
        </div>
    )
}

export default Slider
