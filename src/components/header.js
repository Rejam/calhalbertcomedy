import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <Link to="/panto">Panto</Link>
        <Link to="/">Voice Over</Link>
        <Link to="/">Contact Me</Link>
      </nav>
    </div>
  </div>
)

export default Header
