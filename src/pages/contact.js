import React from 'react'

import Layout from '../components/layout'
import style from '../css/contact.module.css'

const Contact = () => (
  <Layout>
    <main>
      <section>
        <h1>Drop us a Message!</h1>
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
              Name
            </label>
            <input
              className={style.input}
              name="name"
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
              name="email"
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
              required
            />
          </div>
          <button className={style.submit} type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  </Layout>
)

export default Contact
