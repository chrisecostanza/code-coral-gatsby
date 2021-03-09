import React from "react"
import { Link } from "gatsby"

import layoutStyles from "./layout.module.css"
import styles from "./home.module.css"

import homeLogo from '../images/logo-home.svg'

const Home = () => {

  return (
    <div className={styles.homeBg}>
      <div className={layoutStyles.container}>
        <div id={styles.homeHeader}>
          <h1>
            <img src={homeLogo} alt="Code Coral Logo" />
          </h1>
          <h2>Front-end Developer, Designer, and Friend</h2>
          <p>Hi I'm Chris. I love helping small businesses build sweet looking and fast websites.</p>
        </div>

        <div id={styles.homeNav}>
          <nav>
            <Link className={styles.btn} to='/contact/' role='button'>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Home