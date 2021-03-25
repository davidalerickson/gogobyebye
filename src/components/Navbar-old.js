import React from 'react'
import { FaBars } from 'react-icons/fa'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components';



const Navbar = ({ toggle }) => {
  return <>
  <NavWrapper id="back-to-top-anchor">
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="toggle-btn" onClick={toggle}>
            <FaBars/>
          </button>
        </div>
        <Links styleClass="nav-links"/>
        <SocialLinks styleClass="nav-icons"/>
      </div>
    </nav>
  </NavWrapper>
  </>
}

const NavWrapper = styled.div`
.navbar {
  height: 3rem;
  display: flex;
  align-items: center;
  background: transparent;
  border-top: 1px solid var(--clr-grey-8);
  /* border-bottom: 1px solid var(--clr-grey-8); */
  box-shadow: 0px 2px 3px var(--clr-grey-8);
  margin-bottom: 1rem;
}
.nav-center {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover {
  color: var(--clr-primary-3);
}
.nav-links {
  display: none;
}
.nav-icons {
  display: none;
}
@media screen and (min-width: 800px) {
  .toggle-btn {
    display: none;
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .page-link {
    margin-right: 1rem;
  }
  .page-link {
    color: var(--clr-black);
    font-weight: bold;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    transition: var(--transition);
    font-family: var(--ff-secondary);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .page-link:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
  }
  .nav-icons {
    display: flex;
    justify-content: space-between;
  }
  .nav-icons .social-icon {
    font-size: 1.5rem;
    transition: var(--transition);
    margin-left: 0.5rem;
  }
  .nav-icons .social-icon:hover {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
  }
}
`

export default Navbar
