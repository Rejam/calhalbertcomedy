import React from 'react'

import Layout from '../components/layout'
import style from '../css/contact.module.css'

const Contact = () => (
  <Layout>
    <h1>Drop us a Message!</h1>
    <section>
      <form
        className={style.form}
        name="messages"
        action=""
        method="POST"
        netlify-honeypot="hpfield"
        netlify
      >
        <div className={style.hpot}>
          <label>
            Leave this field empty: <input name="hpfield" />
          </label>
        </div>
        <div>
          <label className={style.label} htmlFor="name">
            Name
          </label>
          <input
            className={style.input}
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={style.input}
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className={style.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={style.message}
            name="message"
            id="message"
            cols="30"
            rows="10"
          />
        </div>
        <button>Send</button>
      </form>
    </section>
  </Layout>
)

export default Contact
