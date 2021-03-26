import React from 'react'
import { Link } from "gatsby"
import ByeByeLogo from "../assets/json/justTopLogoAnim.json"
import LottieContainer from "../components/Widgets/LottieContainer"

const HeaderAnimation = () => {
    return (
        <Link to="/">
          <LottieContainer
            JsonAnimation={ByeByeLogo}
            name="ByeByeLogo"
            markers={ByeByeLogo.markers}
          />
        </Link>
    )
}

export default HeaderAnimation
