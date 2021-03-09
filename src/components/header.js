import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.css"

import CCLogo from '../images/code-coral-header-logo.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to='/'><img src={CCLogo} alt="Code Coral Logo" /></Link>
      </div>
      <nav>
        <ul>
            <li>
              <Link to='/contact/'>Contact</Link>
            </li>
          </ul>
      </nav>
    </div>
  </header>
)

export default Header
