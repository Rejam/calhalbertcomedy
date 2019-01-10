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
          alt="Henchman for Rapunzel 2019" />
        <Img 
          className={style.wide} 
          fluid={data.cast.childImageSharp.fluid} 
          alt="The cast of The Wizard of Oz" />
        <Img
          className={style.wide}
          fluid={data.mystic.childImageSharp.fluid}
          alt="Lord Lampton front of cloth" />
        <Img
          className={style.tall}
          fluid={data.jump.childImageSharp.fluid}
          alt="Lord Lambton in The Lambton Worm" />
        <Img
          className={style.tall} 
          fluid={data.lampton.childImageSharp.fluid} 
          alt="Cal performing in The Lampton Worm" />
        <Img 
          className={style.wide} 
          fluid={data.wizard.childImageSharp.fluid} 
          alt="Cal as the wizard of Oz" />
        <Img 
          className={style.wide} 
          fluid={data.finale.childImageSharp.fluid} 
          alt="Wizard of Oz finale" />
        <Img 
          className={style.tall} 
          fluid={data.game.childImageSharp.fluid} 
          alt="Wizard of Oz comedy set piece" />
      </section>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    rapunzel: file(relativePath: { regex: "/rapunzel/" }) {
      ...fluidImage
    }
    mystic: file(relativePath: { regex: "/lampton_mystic/" }) {
      ...fluidImage
    }
    jump: file(relativePath: { regex: "/lampton_jump/" }) {
      ...fluidImage
    }
    lampton: file(relativePath: { regex: "/lampton_welcome/" }) {
      ...fluidImage
    }
    cast: file(relativePath: { regex: "/woo_cast/" }) {
      ...fluidImage
    }
    finale: file(relativePath: { regex: "/woo_finale/" }) {
      ...fluidImage
    }
    game: file(relativePath: { regex: "/woo_game/" }) {
      ...fluidImage
    }
    wizard: file(relativePath: { regex: "/woo_wizard/" }) {
      ...fluidImage
    }
  }
`

export default Panto
