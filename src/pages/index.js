import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from '../css/index.module.css'

export default ({ data }) => (
  <Layout>
    <header>
      <Img
        imgStyle={{ objectPosition: '50% 25%' }}
        className={styles.heroImg}
        fluid={data.heroImage.childImageSharp.fluid}
        alt="Cal Halbert holding a microphone"
      />
      <div className={styles.heroInfo}>
        <h1 className={styles.caption}>Cal Halbert</h1>
        <h2 className={styles.subCaption}>
          One of the UK's Top All Round Entertainers
        </h2>
        <button>Book Cal Now</button>
      </div>
    </header>
    <h1>About Cal Halbert</h1>
    <section className="about">
      <article>
        <Img fluid={data.entertainer.childImageSharp.fluid} />
        <h2>A Versatile Entertainer</h2>
        <p>
          Impressionist, Comedian, Actor, Host and Voice Over Artiste — Cal
          Halbert is one half of 'The Mimic Men'. The UK's only impressionist
          double act! Performing on Britain's Got Talent in 2016 and gaining
          four yeses accompanied by a standing ovation by the judges, audience
          and Ant and Dec.
        </p>
      </article>
      <article>
        <Img fluid={data.taxi.childImageSharp.fluid} />
        <h2>A Proven Track Record</h2>
        <p>
          Maybe you are looking for an entertainer for a birthday party or
          wedding. Or maybe you are looking for an on-stage emcee for your next
          sales meeting or awards ceremony. With previous clients including
          Audi, Santander, BBC, ITV and YouTube. Corporate holiday parties, and
          local private parties, Cal Halbert's high-energy interactive
          entertainment is sure to bring — not just fun — but professionalism
          and experience to your event.
        </p>
      </article>
      <article>
        <Img fluid={data.cabaret.childImageSharp.fluid} />
        <h2>Charity Work</h2>
        <p>
          Cal tries to do as much as he can for charity but as you can imagine
          he gets asked to do numerous events and its always down to his
          availability! Right you can see Cal along side Betty Bloomers, Chris
          Cross and Nat Lunatrick after their cabaret show they performed for
          the homeless charity Crisis in Newcastle on Christmas Day! (Told you
          its always down to availability!)
        </p>
      </article>
    </section>
    <section className="testimonials">
      <h1>Testimonials</h1>
      <Img fluid={data.bgt.childImageSharp.fluid} />
      <div>
        <cite>David Walliams - Author, Actor, Presenter</cite>
        <blockquote>
          Brilliant- Some really original impressions in there, some I've never
          seen be done before - You guys are brilliant''
        </blockquote>
      </div>
      <Img fluid={data.studio.childImageSharp.fluid} />
      <div>
        <cite>Elliot Clarke - MD at Clear and Loud PA Hire</cite>
        <blockquote>
          Cal is professional, skilled, slick, and not easily phased by any
          event, large or small. Whether as a solo standup, presenter,
          after-dinner speaker or as one half of the Mimic Men, Cal is reliable
          and dependable for any event - from a Friday night comedy club to a
          family variety show!
        </blockquote>
      </div>
      <div className="quotes">
        <div>
          <q>Hilarious</q>
          <cite>Daily Mail</cite>
        </div>
        <div>
          <q>Uncanny Imitations</q>
          <cite>The Sun</cite>
        </div>
        <div>
          <q>Very Good</q>
          <cite>Simon Cowell</cite>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/pose_with_mic/" }) {
      ...fluidImage
    }
    entertainer: file(relativePath: { regex: "/pose_with_hands/" }) {
      ...fluidImage
    }
    taxi: file(relativePath: { regex: "/in_taxi/" }) {
      ...fluidImage
    }
    cabaret: file(relativePath: { regex: "/for_charity/" }) {
      ...fluidImage
    }
    bgt: file(relativePath: { regex: "/mimic_men/" }) {
      ...fluidImage
    }
    studio: file(relativePath: { regex: "/at_studio/" }) {
      ...fluidImage
    }
  }
`
