import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactContent from "../components/contact"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <Header />
      <ContactContent />
      <Footer />
    </Layout>
  )
}

export default Contact
