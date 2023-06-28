import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import ContactContent from "../components/contact"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Me" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContactContent />
    </Layout>
  )
}

export default Contact
