import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../css/main.css'
import styles from '../css/layout.module.css'
import Header from './header'
import Footer from './footer'
import icon from '../images/favicon.png'

const Layout = ({ children }) => (
  <>
    <Helmet title="Cal Halbert">
      <html lang="en" />
      <meta name="twitter:site" content="@CalHalbert" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Cal Halbert" />
      <link rel="shortcut icon" type="image/png" href={icon} />
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Squada+One"
        rel="stylesheet"
      />
    </Helmet>
    <Header siteTitle="Cal Halbert" />
    <div className={styles.layout}>{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
