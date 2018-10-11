import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../css/main.css'
import styles from '../css/layout.module.css'
import Header from './header'
import Footer from './footer'

const meta = [
  { name: 'description', content: 'Sample' },
  { name: 'keywords', content: 'sample, something' },
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Helmet title={site.siteMetadata.title} meta={meta}>
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Squada+One"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={site.siteMetadata.title} />
        <div className={styles.layout}>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
