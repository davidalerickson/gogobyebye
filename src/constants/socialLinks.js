import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare
} from "react-icons/fa"

const SocialWrapper = styled.ul`
  .facebook-icon {
    color: #3b5998;
  }
  .twitter-icon {
    color: #00acee;
  }
  .instagram-icon {
    color: #ea4c89;
  }

`

const SocialLinks = ({ styleClass }) => {
  return (
    <SocialWrapper className={styleClass}>
      <li>
        <a href="https://www.facebook.com/travelwithdavidandcarmela/?modal=admin_todo_tour">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/go_go_bye_bye/">
          <FaInstagramSquare className="social-icon instagram-icon"></FaInstagramSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/gogobyebye1">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </SocialWrapper>
  )
}
export default SocialLinks
