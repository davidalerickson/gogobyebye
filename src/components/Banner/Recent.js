import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title'

const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query)
  const {allMdx:{nodes:posts}} = data
  return (
  <Wrapper>
    <Title title="recent" />
    { posts.map(post=>{
      const {title, slug, date, image:{childImageSharp:{fluid}}} = post.frontmatter
      return <Link to={`/posts/${slug}`} key={post.id} className="post">
        <Image fluid={fluid} className="img"></Image>
        <div>
          <h5>{title}</h5>
          <p>{date}</p>
        </div>
      </Link>
    })}
      <Link to='/posts' className="link-allposts" >All Posts</Link>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--radius);
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: var(--clr-grey-1);
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: var(--clr-grey-5);
  }
  .post:hover {
    h5 {
      color: var(--clr-primary-5);
    }
  }
  .link-allposts {
    margin: 0 .25rem 1rem;
    background: var(--clr-primary-5);
    padding: 0.2rem 0.4rem;
    text-transform: uppercase;
    font-size: 0.5rem;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-white);
  }
`

export default Recent
