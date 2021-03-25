import React from "react"
import Slide from "@material-ui/core/Slide"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
//Note that HideOnScroll accepts a single component as a child elelment, so you have to wrap in a parent element like a div

const HideOnScroll = (props) => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
      <div>
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
      </div>
  )
}

export default HideOnScroll
