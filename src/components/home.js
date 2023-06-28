import React from "react"
import { Link } from "gatsby"

import * as layoutStyles from "./layout.module.css"
import * as homeStyles from "./home.module.css"

import homeLogo from '../images/logo-home.svg'

const Home = () => {

  return (
    <div className={homeStyles.homeBg}>
      <div className={layoutStyles.container}>
        <div id={homeStyles.homeHeader}>
          <h1>
            <img src={homeLogo} alt="Code Coral Logo" />
          </h1>
          <h2>Front-end Developer, Designer, and Friend</h2>
          <p>Hi I'm Chris. I love helping small businesses build sweet looking and fast websites.</p>
        </div>

        <div id={homeStyles.homeNav}>
          <nav>
            <Link className={homeStyles.btn} to='/contact/' role='button'>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Home