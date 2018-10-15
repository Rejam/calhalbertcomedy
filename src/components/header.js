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
    const pathname =
      typeof window !== 'undefined' ? window.location.pathname : null
    const { siteTitle, routes } = this.props
    const { toggle } = this
    const { show } = this.state
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
          <nav className={`${style.nav} ${show ? style.show : ''}`}>
            {routes.map(r => (
              <Link
                key={r.path}
                to={r.path}
                className={r.path === pathname ? style.active : ''}
              >
                {r.text}
              </Link>
            ))}
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
