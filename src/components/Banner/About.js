import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
    aboutPhoto: file(relativePath: { eq: "banner-about-dc.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>

        <Title title="About Us" />{' '}
        <Image fixed={data.aboutPhoto.childImageSharp.fixed} className="img"/>
        <p>We are David and Carmela, an American-Brazilian couple who has chosen to live our lives as citizens of the world.</p>
        <SocialLinks styleClass="banner-icons"/>
  
      <div className="line"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
