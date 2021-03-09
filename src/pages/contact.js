import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactContent from "../components/contact"
import Footer from "../components/footer"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact Me" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContactContent />
      <Footer />
    </Layout>
  )
}

export default Contact
