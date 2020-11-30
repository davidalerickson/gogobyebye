import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

const GalleryGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1rem;
  padding-top: 1.5rem;
  .gallery__image {
    width: 100%;
    height: 100%;
    /* object fit to make picture fit within assigned grid cells */
    object-fit: cover;
    /* set to display block to eliminate weird white space after. */
    display: block;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      opacity: 30%;
    }
  }
  .gallery__item {
    &--1 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }
    &--2 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 3;
    }
    &--3 {
      grid-row: 1 / span 2;
      grid-column: 6 / span 1;
    }
    &--4 {
      grid-row: 1 / span 2;
      grid-column: 7 / span 2;
    }
    &--5 {
      grid-row: 3 / span 3;
      grid-column: 1 / span 2;
    }
    &--6 {
      grid-row: 4 / span 2;
      grid-column: 3 / span 2;
    }
    &--7 {
      grid-row: 4 / span 1;
      grid-column: 5 / span 1;
    }
    &--8 {
      grid-row: 3 / span 2;
      grid-column: 6 / span 2;
    }
    &--9 {
      grid-row: 3 / span 3;
      grid-column: 8 / span 1;
    }
    &--10 {
      grid-row: 6 / span 2;
      grid-column: 1 / span 1;
    }
    &--11 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }
    &--12 {
      grid-row: 6 / span 2;
      grid-column: 4 / span 1;
    }
    &--13 {
      grid-row: 5 / span 3;
      grid-column: 5 / span 3;
    }
    &--14 {
      grid-row: 6 / span 2;
      grid-column: 8 / span 1;
    }
  }
`;


const GalleryTiledGrid = ({ images, getCurrentPhoto }) => {
  console.log(images);
  const galleryString = images.map((fluid, index) => {
    return (
      <figure
        className={`gallery__item gallery__item--${index + 1}`}
        key={index}
      >
        <a href="#popup" onClick={() => getCurrentPhoto(index)}>
          <Image
            fluid={fluid}
            alt={`Gallery-Image-${index + 1}`}
            className="gallery__image"
          />
        </a>
      </figure>
    );
  });
  return <GalleryGridWrapper>{galleryString}</GalleryGridWrapper>;
};

export default GalleryTiledGrid;
