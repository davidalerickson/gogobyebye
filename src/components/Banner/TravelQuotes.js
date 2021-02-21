import React from 'react'
import Title from './Title'
import styled from 'styled-components'
import './quotes'
import quotes from './quotes'



const TravelQoutes = () => {

  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
  console.log(randomQuote.author);

  return (
    <Wrapper>
      <Title title="Travel Quotes" />
      <div className="travel-quotes">
        <figure className="quote">
          <blockquote className="quote__text">
            {randomQuote.quote}
          </blockquote>
          <figcaption className="quote__author-box">
            <p className="quote__author-name"> - {randomQuote.author}</p>
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
        top: -1.2rem;
        left: -.3rem;
        font-size: 10rem;
        line-height: 1;
        font-family: sans-serif;
        color: #ddd999;
        z-index: 1;

    }
    
  }
  
  
`

export default TravelQoutes
