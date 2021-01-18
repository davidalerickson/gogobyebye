import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components';

const FooterWrapper = styled.div`
  .footer {
    height: 7rem;
    text-align: center;
    background: var(--clr-black);
    display: grid;
    place-items: center;
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .footer-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  .footer-icons li {
    transition: var(--transition);
  }
  .footer-icons li:hover {
    transform: translateY(-10%);
  }
  .footer p {
    margin-bottom: 0;
    color: var(--clr-white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

`

const Footer = () => {
  return (
  <FooterWrapper>
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons"/>
        <p>
          &copy;{new Date().getFullYear()} GoGoByeBye and David Erickson. All rights reserved
        </p>
      </div>
    </footer>
  </FooterWrapper>
  )
}

export default Footer
