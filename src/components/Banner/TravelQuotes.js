import React from 'react'
import Title from './Title'
import styled from 'styled-components'



const TravelQoutes = () => {

  return (
    <Wrapper>
      <Title title="Travel Quotes" />
      <div className="travel-quotes">
        <figure className="quote">
          <blockquote className="quote__text">
            Still round the corner, there may wait, a new road or a secret gate.
          </blockquote>
          <figcaption className="quote__author-box">
            <p className="quote__author-name">J.R.Tolkein - <span className="quote__author-date">1954</span></p>
          </figcaption>
          
        </figure>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.article`
  .quote{
    position: relative;
    background: #FFF;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: .5rem;

    &__text{
      margin-bottom: 1rem;
      z-index: 10;
      position: relative; //to allow z-index to work
      font-style: italic;
    }

    &__author-name{
      font-size: 1.1.rem;
      font-weight: 600;
      text-transform: uppercase;

    }

    &__author-box{
      text-align: right;

    }

    &__author-date{
      font-size: .9rem;
    }

    &::before {
        content: "\\201C"; //Need to escape the backslash to get this to work
        position: absolute;
        top: -1.4rem;
        left: -.3rem;
        font-size: 10rem;
        line-height: 1;
        font-family: sans-serif;
        color: #eee;
        z-index: 1;

    }
    
  }
  
  
`

export default TravelQoutes
