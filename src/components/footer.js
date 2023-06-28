import React from "react"

import * as styles from "./footer.module.css"

const Footer = ({ data }) => (
  <footer className={styles.footer}>
    <p>© copyright {new Date().getFullYear()} - code coral, llc</p>
  </footer>
)

export default Footer