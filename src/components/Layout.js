import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import BackToTop from '../components/Widgets/BackToTop'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <BackToTop/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <main>{children}</main> 
      <Footer/>
    </>
  )
}

export default Layout
