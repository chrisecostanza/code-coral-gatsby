/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "@fontsource/raleway/400.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"
import "../styles/reset.css"
import "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <main>{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
