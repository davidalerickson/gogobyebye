import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .grid-image{
    width: 80%;
  }
`

const ShowImage = ({gridimage01}) => {
    return (
        <Wrapper>
                    <img src={gridimage01} className="grid-image"/>
        </Wrapper>
    )
}

export default ShowImage




