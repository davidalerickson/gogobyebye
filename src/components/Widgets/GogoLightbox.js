import React from 'react'
import styled from "styled-components";

const LightboxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position:fixed;
  top:0;
  left:0; 
  background-color: rgba(0,0,0, .8);
  z-index: 100;
  display: none;
  &__content {

  }
`;

const GogoLightbox = ({visible, image}) => {
    return (
        <LightboxWrapper>
        <div className="lightbox">
          <div className="lightbox__content">POPUP</div>
        </div>
      </LightboxWrapper>
    )
}

export default GogoLightbox
