import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { graphql, useStaticQuery } from 'gatsby'

// const query = graphql`
//   {
//     allInstaNode(limit: 6) {
//       nodes {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         original
//       }
//     }
//   }
// `

const Instagram = () => {
  // const data = useStaticQuery(query)
  // const {
  //   allInstaNode: { nodes },
  // } = data
  return (
    <Wrapper>
      <div>Instagram Section</div>
      {/* <Title title="instagram" />
      <div className="images">
        {nodes.map((item, index) => {
          const {
            localFile: {
              childImageSharp: { fluid },
            },
            original,
          } = item
          return (
            <a href={original} key={index} >
              <Image fluid={fluid}/>
            </a>
          )
        })}
      </div>
      <div className="link-container">
        <a
          href="https://www.instagram.com/go_go_bye_bye/"
          className="link insta-link"
        >
          gogobyebye Instagram
          <IoMdArrowRoundForward />{' '}
        </a>
      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .insta-link {
    font-size: 0.75rem;
  }
  .link-container{
    margin-top:1rem;
  }
  .link {
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-grey-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
`

export default Instagram
