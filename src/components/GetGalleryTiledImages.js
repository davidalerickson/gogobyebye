import React, {useState} from 'react'
import {graphql, useStaticQuery } from 'gatsby';
import GalleryTiledGrid from '../components/imagelayout/GalleryTiledGrid'
import GogoLightbox from '../components/Widgets/GogoLightbox'

const query = graphql`
{
    images: allFile(filter: {sourceInstanceName: {eq: "posts"}, extension: {regex: "/jpeg|jpg|JPG|png|gif/"}}) {
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


const GetGalleryTiledImages = ({blogDate}) => {
  console.log(blogDate);
    const data = useStaticQuery(query)
    console.log(data);
    const {images:{nodes}} = data
    const filteredNodes = nodes.filter((nodeImage, index) => {
      return nodeImage.relativePath.startsWith(blogDate) && nodeImage.relativePath.includes('gallery-images')
    })
    // console.log(filteredNodes);
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const filteredNodeImages = filteredNodes.map((image, index) => {
      const {childImageSharp:{fluid}} = image
      return fluid
    })
    // console.log(filteredNodeImages);
    const getCurrentPhoto = (currentPhoto) => {
      setCurrentPhoto(currentPhoto)
    }
  
    return (
        <div>
            <GalleryTiledGrid images={filteredNodeImages} getCurrentPhoto={getCurrentPhoto}/>
              <GogoLightbox images={filteredNodeImages} currentPhoto={currentPhoto} />
        </div>
    )
}

export default GetGalleryTiledImages
