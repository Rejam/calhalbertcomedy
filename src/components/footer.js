import React from 'react'
import { Link } from 'gatsby'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import style from '../css/footer.module.css'

export default () => {
  return (
    <div>
      <nav className={style.social}>
        <a
          className={style.icon}
          href="https://www.facebook.com/CalTheMimicMan"
        >
          <FaFacebook />
        </a>
        <a className={style.icon} href="https://twitter.com/CalHalbert">
          <FaTwitter />
        </a>
        <a className={style.icon} href="https://www.instagram.com/CalHalbert">
          <FaInstagram />
        </a>
        <a
          className={style.icon}
          href="https://www.linkedin.com/in/cal-halbert-2b9a80b6/"
        >
          <FaLinkedin />
        </a>
        <a
          className={style.icon}
          href="https://www.youtube.com/user/calhalbertcomedy"
        >
          <FaYoutube />
        </a>
      </nav>
      <div className={style.foot}>
        <p>Copyright © 2018 Cal Halbert</p>
        <a href="#top">Top</a>
      </div>
    </div>
  )
}
