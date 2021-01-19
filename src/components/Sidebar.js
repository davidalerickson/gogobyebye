import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components';

const SidebarWrapper = styled.div`


.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background: var(--clr-grey-10rgba);
  transition: var(--transition);
  display: grid;
  align-items: center;
  padding-left: 2rem;
  z-index: 999;
  transform: translateX(-100%);
  visibility: hidden;
}
.showSidebar {
  transform: translateX(0);
  visibility: visible;
}
.sidebar-links li {
  margin-bottom: 1.5rem;
}
.sidebar-links .page-link {
  font-size: 1.5rem;
  display: block;
  color: var(--clr-grey-1);
  font-weight: 700;
}
.sidebar .categories {
  flex-direction: column;
  margin: 1rem 0;
}
.sidebar .category {
  color: var(--clr-grey-5);
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 1rem;
  display: block;
  cursor: pointer;
}

@media screen and (min-width: 800px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: transparent;
  font-size: 3rem;
  cursor: pointer;
}
`

const Sidebar = ({isOpen, toggle}) => {
  return(
    <SidebarWrapper>
      <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
        <button className="close-btn" onClick={toggle}>
          <IoMdClose/>
        </button>
        <div className="sidebar-container">
          <Links styleClass="sidebar-links">
            <Categories/>
          </Links>
        </div>
      </aside>
    </SidebarWrapper>
  )
}

export default Sidebar
