import React from 'react'
import { Link } from 'gatsby'
// import logo from '../assets/gogobyebye-logo.svg'
import ByeByeLogo from "../assets/json/justTopLogoAnim.json";
import LottieContainer from '../components/Widgets/LottieContainer'

const Header = () => {
    return (
        <div>
                      <Link to="/" >
          {/* <img src={logo}/> */}
          <LottieContainer
          JsonAnimation={ByeByeLogo}
          name="ByeByeLogo"
          markers={ByeByeLogo.markers}
        />
        </Link>
        </div>
    )
}

export default Header
