import React from 'react'
import styled from 'styled-components'
import Image from "gatsby-image"

const Wrapper = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 1rem;
grid-row-gap: 1rem;

  .grid-image{
    /* width: 100%; */
        height: 100%;
    object-fit: cover;
  }
`
//To Do map array of images ot make grid
const ShowImage = ({images}) => {
  console.log(images);
  const gridToRender = images.map((fluid, index) => {
  return <div key={index}>
        <Image fluid={fluid} className="grid-image"/>
  </div>
  })
    return (
        <Wrapper>
          {gridToRender}
        </Wrapper>
    )
}

export default ShowImage




