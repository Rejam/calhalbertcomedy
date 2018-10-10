import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <header>
      <img src="ch_face.jpg" alt="" />
      <h1>Cal Halbert</h1>
      <h2>One of the UK's Top All Round Entertainers</h2>
      <button>Book Cal Now</button>
    </header>
    <section className="about">
      <h1>About Cal Halbert</h1>
      <article>
        <h2>A Versatile Entertainer</h2>
        <p>
          Impressionist, Comedian, Actor, Host and Voice Over Artiste — Cal
          Halbert is one half of 'The Mimic Men'. The UK's only impressionist
          double act! Performing on Britain's Got Talent in 2016 and gaining
          four yeses accompanied by a standing ovation by the judges, audience
          and Ant and Dec.
        </p>
        <img src="ch_taxi.jpg" alt="" />
      </article>
      <article>
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
        <img src="ch_cabaret.jpg" alt="" />
      </article>
      <article>
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
      <img src="mm_gbt.jpg" alt="" />
      <div>
        <cite>David Walliams - Author, Actor, Presenter</cite>
        <blockquote>
          Brilliant- Some really original impressions in there, some I've never
          seen be done before - You guys are brilliant''
        </blockquote>
      </div>
      <img src="ch_studio.jpg" alt="" />
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

export default IndexPage
