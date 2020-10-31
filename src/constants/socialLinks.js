import React from "react"
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaInstagramSquare
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
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
    </ul>
  )
}
export default SocialLinks
