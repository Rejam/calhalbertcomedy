import React from 'react'

import Layout from '../components/layout'
import style from '../css/contact.module.css'

const Contact = () => (
  <Layout>
    <h1>Drop us a Message!</h1>
    <section>
      <form
        className={style.form}
        method="POST"
        action="https://formspree.io/calhalbertcomedy@live.co.uk"
      >
        <div className={style.hpot}>
          <label>
            Leave this field empty: <input name="_gotcha" />
          </label>
        </div>
        <div>
          <label className={style.label} htmlFor="name">
            Name:
            <input
              className={style.input}
              name="name"
              id="name"
              type="text"
              placeholder="Name"
            />
          </label>
        </div>
        <div>
          <label className={style.label} htmlFor="email">
            Email:
            <input
              className={style.input}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </label>
        </div>
        <div>
          <label className={style.label} htmlFor="message">
            Message:
            <textarea
              className={style.message}
              name="message"
              id="message"
              cols="30"
              rows="10"
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  </Layout>
)

export default Contact
