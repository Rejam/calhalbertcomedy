import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../css/main.css'
import Header from './header'
import Footer from './footer'
import Social from './social'
import icon from '../images/favicon.png'

const Layout = ({ children }) => {
  const routes = [
    { text: 'Home', path: '' },
    { text: 'Panto', path: 'panto' },
    { text: 'Videos', path: 'videos' },
    { text: 'Voice Over', path: 'voice' },
    { text: 'Contact', path: 'contact' },
  ]
  const pathname =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/[/]/g, '')
      : ''

  return (
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
      <Header siteTitle="Cal Halbert" routes={routes} pathname={pathname} />
      <Social />
      <div>{children}</div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
