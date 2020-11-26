import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

const GridWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const ImageWrapper = styled.div`
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 30%;
  }
`;



//To Do map array of images ot make grid
const ShowImage = ({ images }) => {
  console.log(images);
  const gridToRender = images.map((fluid, index) => {
    return (
      <ImageWrapper key={index} onClick={() => alert(fluid.src)}>
        {/* <Image fluid={fluid} className="grid-image"/> */}
        <Image
          fluid={fluid}
          imgStyle={{
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </ImageWrapper>
    );
  });
  return (
    <>
      <GridWrapper>{gridToRender}</GridWrapper>
    </>
  );
};

export default ShowImage;
