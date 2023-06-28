import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import ThanksContent from "../components/thanks"

const Thanks = () => {
  return (
    <Layout>
      <Seo title="Thank You" />
      <Header />
      <ThanksContent />
    </Layout>
  )
}

export default Thanks
