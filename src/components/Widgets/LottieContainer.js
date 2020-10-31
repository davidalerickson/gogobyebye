import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  .lottie-animation {
    width: 80%;
    /* border: solid 1px black;
    border-radius: 5px; */
    margin: 0 auto;
    @media screen and (min-width: 800px) {
        width: 55%;
    }
  }
`;

export class LottieContainer extends Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.JsonAnimation,
      name: this.props.name,
    });
  }

  onAnimEnter = () => {
    lottie.pause(this.props.name);
  };

  onAnimLeave = () => {
    lottie.play(this.props.name);
  };

  render() {
    return (
      <Wrapper>
        <div
          className="lottie-animation"
          ref={(ref) => (this.animBox = ref)}
          onMouseEnter={() => this.onAnimEnter()}
          onMouseLeave={() => this.onAnimLeave()}
        ></div>
      </Wrapper>
    );
  }
}

export default LottieContainer;
