import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Indicator from './utils/indicator'
import Home from './contents/home'

import "../sass/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Header />
      <Indicator />
      <section className="content">
        <Home />
      </section>
      {/* <section className="content" >
        <Home />
      </section> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
