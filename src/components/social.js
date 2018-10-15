import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import style from '../css/social.module.css'

export default () => {
  return (
    <nav className={style.social}>
      <a
        className={style.icon}
        aria-label="Facebook"
        href="https://www.facebook.com/CalTheMimicMan"
      >
        <FaFacebook />
      </a>
      <a
        className={style.icon}
        aria-label="Twitter"
        href="https://twitter.com/CalHalbert"
      >
        <FaTwitter />
      </a>
      <a
        className={style.icon}
        aria-label="Instagram"
        href="https://www.instagram.com/CalHalbert"
      >
        <FaInstagram />
      </a>
      <a
        className={style.icon}
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/cal-halbert-2b9a80b6/"
      >
        <FaLinkedin />
      </a>
      <a
        className={style.icon}
        aria-label="YouTube"
        href="https://www.youtube.com/user/calhalbertcomedy"
      >
        <FaYoutube />
      </a>
    </nav>
  )
}
