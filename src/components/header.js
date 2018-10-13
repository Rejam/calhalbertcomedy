import React from 'react'
import { Link } from 'gatsby'

import { FaBars } from 'react-icons/fa'
import styles from '../css/header.module.css'

class Header extends React.Component {
  state = {
    hide: true,
  }

  toggle = () => this.setState(({ hide }) => ({ hide: !hide }))

  render() {
    const { siteTitle } = this.props
    const { toggle } = this
    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.heading}>{siteTitle}</h1>
          <button className={styles.menuButton} onClick={toggle}>
            <FaBars />
          </button>
          <nav
            id="nav"
            className={`${styles.nav} ${this.state.hide && styles.hide}`}
          >
            <Link to="/">Home</Link>
            <Link to="/panto">Panto</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/voice">Voice Over</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
