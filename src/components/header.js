import React from 'react'
import { Link } from 'gatsby'

import { FaBars } from 'react-icons/fa'
import style from '../css/header.module.css'

class Header extends React.Component {
  state = {
    show: false,
  }

  toggle = () => this.setState(({ show }) => ({ show: !show }))

  render() {
    const { siteTitle } = this.props
    const { toggle } = this
    return (
      <div>
        <header className={style.header}>
          <h1 className={style.heading}>{siteTitle}</h1>
          <button
            className={style.menuButton}
            onClick={toggle}
            aria-label="menu toggle"
          >
            <FaBars />
          </button>
          <nav className={`${style.nav} ${this.state.show ? style.show : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/panto">Panto</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/voice">Voice Over</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
