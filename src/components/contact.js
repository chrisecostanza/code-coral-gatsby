import React from "react"

import layoutStyles from "./layout.module.css"
import styles from "./contact.module.css"

const Contact = () => (
  <div className={styles.contactContent}>
    <div className={layoutStyles.container}>
      <h2>Contact</h2>
      <p className={styles.contactSubtitle}>Let me know how I can help you with your web development needs. Whether it’s over coffee or pad thai let’s get together!</p>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
        <input type="hidden" name="form-name" value="contact" />
        <div><input name="bot-field" /></div>
        <p>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" maxLength="30" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" maxLength="50" required />
        </p>
        <p>
          <label htmlFor="type[]">Project Type</label>
          <select name="type[]">
            <option value="">Select a Project Type</option>
            <option value="design">Website Design</option>
            <option value="development">Website Development</option>
            <option value="both">Both</option>
          </select>
        </p>
        <p>
          <label htmlFor="budget[]">Project Budget</label>
          <select name="budget[]">
            <option value="">Select a Budget</option>
            <option value="$0-5k">$0-5k</option>
            <option value="$5-15k">$5-15k</option>
            <option value="$15k+">$15k+</option>
          </select>
        </p>
        <p>
          <label htmlFor="details">Additional Details...</label>
          <textarea name="details" maxLength="500"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
)

export default Contact