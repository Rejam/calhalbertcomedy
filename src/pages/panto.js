import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import style from '../css/panto.module.css'

const Panto = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Check out the Cal's panto pics!."
      />
      <title>Cal Halbert: Panto</title>
      <link rel="canonical" href="https://calhalbertcomedy.co.uk/panto" />
    </Helmet>
    <main>
      <h1>Pantomime</h1>

      <section className={style.text}>
        <p>
          Cal is an all round entertainer and able to adapt his act from adult
          only to family shows! He was a member of the Award Winning Pantomime
          'The Lambton Worm' at The Customs House, South Shields. Playing the
          batty, wacky, silly Lord Lambton!
        </p>
        <p>You may have also seen Cal as The Wizard in 'The Wizard Of Oz'</p>
        <p>
          If you are interested in booking Cal for your pantomime message him
          now!
        </p>
        <Link className={style.link} to="/contact">
          Message Now
        </Link>
      </section>
      <section className={style.gallery}>
        <Img
          className={style.tall}
          fluid={data.rapunzel.childImageSharp.fluid}
          alt="Cal dressed as the Henchman for Rapunzel 2019" />
        <Img
          className={style.tall}
          fluid={data.poster.childImageSharp.fluid}
          alt="Cal as the Wizard in The Wizard of Oz poster" />
        <Img
          className={style.wide}
          fluid={data.oz.childImageSharp.fluid}
          alt="Cal performing in The Wizard of Oz" />
        <Img className={style.tall} 
          fluid={data.jump.childImageSharp.fluid} 
          alt="Cal as Lord Lambton in The Lambton Worm" />
        <Img 
          className={style.wide} 
          fluid={data.cast.childImageSharp.fluid} 
          alt="Cal with the cast of The Lambton Worm" />
        <Img 
          className={style.tall} 
          fluid={data.dame.childImageSharp.fluid} 
          alt="Cal as Lord Lambton in The Lambton Worm posing with the Dame" />
      </section>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    rapunzel: file(relativePath: { regex: "/rapunzel/" }) {
      ...fluidImage
    }
    cast: file(relativePath: { regex: "/lampton_cast/" }) {
      ...fluidImage
    }
    jump: file(relativePath: { regex: "/lampton_jump/" }) {
      ...fluidImage
    }
    dame: file(relativePath: { regex: "/with_dame/" }) {
      ...fluidImage
    }
    poster: file(relativePath: { regex: "/wizard_poster/" }) {
      ...fluidImage
    }
    oz: file(relativePath: { regex: "/wizard_of_oz/" }) {
      ...fluidImage
    }
  }
`

export default Panto
