import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Panto = ({ data }) => (
  <Layout>
    <h1>Pantomime</h1>
    <section className="images">
      <Img fluid={data.poster.childImageSharp.fluid} />
      <Img fluid={data.jump.childImageSharp.fluid} />
      <Img fluid={data.dame.childImageSharp.fluid} />
      <Img fluid={data.oz.childImageSharp.fluid} />
      <Img fluid={data.cast.childImageSharp.fluid} />
    </section>
    <section>
      <p>
        Cal is an all round entertainer and able to adapt his act from adult
        only to family shows! He was a member of the Award Winning Pantomime
        'The Lambton Worm' at The Customs House, South Shields. Playing the
        batty, wacky, silly Lord Lambton!
      </p>
      <p>You may have also seen Cal as The Wizard in 'The Wizard Of Oz'</p>
      <p>
        If you are interested in booking cal for your pantomime message him now!
      </p>
      <button>Message Now</button>
    </section>
  </Layout>
)

export const query = graphql`
  query {
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
