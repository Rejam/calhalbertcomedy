import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import style from '../css/video.module.css'

const videos = [
  {
    id: 'ZocJahCTZy0',
    caption: `Watch Cal's audition on Britain's Got Talent as one half of The MimicMen`,
  },
  { id: 'slB1oRyifJs', caption: 'Cal calls a nursery as Mrs Doubtfire' },
  {
    id: 'yzDqDMZIjUs',
    caption: 'Cal in a promotional video for a local taxi service!',
  },
]
export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="Watch some of the videos that Cal has been in or created." />
        <title>Cal Halbert: Videos</title>
        <link rel="canonical" href="https://calhalbertcomedy.co.uk/videos" />
      </Helmet>
      <main>
        <section>
          <h1>Videos</h1>
          <div>
            {videos.map(({ id, caption }) => (
              <figure className={style.video}>
                <article className={style.frame}>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    frameborder="0"
                    allowfullscreen
                  />
                </article>
                <figcaption className={style.caption}>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
