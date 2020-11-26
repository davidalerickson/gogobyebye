import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "gatsby-image"

const LightboxCarouselContainer = ({images}) => {
    const imagesToRender = images.map((fluid, index) => {
        return (
          <div key={index}>
            <Image fluid={fluid} />
          </div>
        );
      });
    return (
        <div className="carousel-wrapper">
        <Carousel showThumbs={false} showArrows autoPlay infiniteLoop interval="8000" transitionTime="500">
            {imagesToRender}
        </Carousel>
      </div>
    )
}

export default LightboxCarouselContainer
