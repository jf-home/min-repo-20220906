import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Footer from './footer'
import './layout.css'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
    </Helmet>
      <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout