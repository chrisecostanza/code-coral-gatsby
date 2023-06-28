import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import ThanksContent from "../components/thanks"
// import Footer from "../components/footer"

const Thanks = () => {
  return (
    <Layout>
      <Seo title="Thank You" />
      <Header />
      <ThanksContent />
      {/* <Footer /> */}
    </Layout>
  )
}

export default Thanks