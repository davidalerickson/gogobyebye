import React from "react";
import styled from "styled-components";
import LightboxCarouselContainer from "../Widgets/LightboxCarouselContainer";

const LightboxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(25, 122, 205, 0.8);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &:target {
    opacity: 1;
    visibility: visible;
  }

  .lightbox__content {
    width: 90%;
    /* height: 50%; */
    background-color: white;
    /* max-height: 500px;
    margin-left: 10vh;
    margin-right: 10vh; */
    padding-top: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
      /* Chrome requires that min-aspect-ratio must be expressed as a fraction and NOT A DECIMAL */
    @media screen and (min-aspect-ratio: 4/3) {
      width: 80%;
    }
    @media screen and (min-aspect-ratio: 3/2) {
      width: 70%;
    }
    @media screen and (min-aspect-ratio: 17/10) {
      width: 60%;
    }
    @media screen and (min-aspect-ratio: 19/10) {
      width: 50%;
    }
  }
  .lightbox__close {
    &:link,
    &:visited {
      color: black;
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
    }
  }
`;

const GogoLightbox = ({ visible, images, currentPhoto }) => {
  return (
    <LightboxWrapper id="popup">
      <div className="lightbox__content">
        <a href="#photogrid" className="lightbox__close">
          &times;
        </a>
        <LightboxCarouselContainer images={images} currentPhoto={currentPhoto} />
      </div>
    </LightboxWrapper>
  );
};

export default GogoLightbox;
