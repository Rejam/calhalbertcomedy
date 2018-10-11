import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <header>
      <h1 className={styles.heading}>{siteTitle}</h1>
    </header>

    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/panto">Panto</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/voice">Voice Over</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  </div>
)

export default Header
