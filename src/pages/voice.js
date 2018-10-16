import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import style from '../css/voice.module.css'

const Voice = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Check out some of the voice over work that Cal has done."
      />
      <title>Cal Halbert: Voice Over</title>
      <link rel="canonical" href="https://calhalbertcomedy.co.uk/voice" />
    </Helmet>
    <main>
      <h1 className={style.heading}>Voice Overs</h1>
      <section className={style.flex}>
        <section className={style.img}>
          <Img
            style={{ height: '100%' }}
            imgStyle={{ objectFit: 'cover', objectPosition: '60% 25%' }}
            fluid={data.voice.childImageSharp.fluid}
          />
        </section>

        <section className={style.articles}>
          <article>
            <h2>Current Voice of LoveSport Radio</h2>
            <p>
              You may recognise Cal's voice as the 'voice of the station' at
              LoveSport Radio. The London sports station has several highly
              acclaimed sports stars hosting shows including Olympic Sprinter
              Iwan Thomas MBE and Former England and Lions Rugby Player Brian
              Moore!
            </p>
          </article>
          <article>
            <h2>Get Your Voice Right</h2>
            <p>
              Cal has provided voice overs for everything from YouTube Videos to
              Hair Loss Products and even West Ham United. He is adaptable and
              passionate about you receiving your perfect company voice.
            </p>
          </article>
          <article>
            <h2>Ask for a Demo</h2>
            <p>
              Cal offers a free demo of what you would like recording at no
              cost! Simply send him a message with all the details via the
              button below!
            </p>
            <Link className={style.button} to="/contact">
              Request a demo
            </Link>
          </article>
        </section>
      </section>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    voice: file(relativePath: { regex: "/voice/" }) {
      ...fluidImage
    }
  }
`

export default Voice
