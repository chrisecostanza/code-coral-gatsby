import React from "react"

import * as layoutStyles from "./layout.module.css"
import * as styles from "./thanks.module.css"

const Thanks = () => (
  <div className={styles.thanksContent}>
    <div className={layoutStyles.container}>
      <h2>Yay! You did it!</h2>
      <p className={styles.thanksSubtitle}>
        How exciting! I look forward to connecting with you.
      </p>
      <p className={styles.thanksSubtitle}>
        Talk to you soon. <br />
        Have a great day!<br />
        Chris
      </p>
    </div>
  </div>
)

export default Thanks