import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "slider-images"}}) {
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

const CarouselContainer = () => {
    const {allFile:{nodes}} = useStaticQuery(query)
  return (
    
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} showArrows autoPlay infiniteLoop interval="8000" transitionTime="500" selected>
      { nodes.map((item, index) => {
        const {childImageSharp:{fluid}} = item
           return <div key={index}>
          <Image fluid={{...fluid, aspectRatio: 21/9}}/>
           {/* <Image fluid={fluid}/> */}
           </div>
        })}
      </Carousel>
    </div>
  )
}

export default CarouselContainer
