import React from 'react'

import Layout from '../components/layout'
import style from '../css/video.module.css'

const Videos = () => (
  <Layout>
    <main>
      <section>
        <h1>Videos</h1>
        <article>
          <div className={style.video}>
            <iframe
              src="https://www.youtube.com/embed/ZocJahCTZy0"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p>
            Watch Cal's audition on Britain's Got Talent as one half of The
            MimicMen
          </p>
        </article>
        <article>
          <div className={style.video}>
            <iframe
              src="https://www.youtube.com/embed/slB1oRyifJs"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p>Cal calls a nursery as Mrs Doubtfire</p>
        </article>
        <article>
          <div className={style.video}>
            <iframe
              src="https://www.youtube.com/embed/yzDqDMZIjUs"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p>A promotional video for a local taxi service!</p>
        </article>
      </section>
    </main>
  </Layout>
)

export default Videos
