import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import style from '../css/panto.module.css'

const Panto = ({ data }) => {
  const { title, mainHeading, blurb, pantoPics } = data.contentfulPanto

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content="Check out the Cal's panto pics!." />
        <title>{title}</title>
        <link rel="canonical" href="https://calhalbertcomedy.co.uk/panto" />
      </Helmet>
      <main>
        <section className={style.text}>
          <h1>{mainHeading}</h1>
          {documentToReactComponents(blurb.json)}
          <Link className={style.link} to="/contact">
            Message Now
          </Link>
        </section>
        <section className={style.gallery}>
          {pantoPics.map(({ id, fluid }) => (
            <Img
              key={id}
              className={fluid.aspectRatio > 1 ? style.wide : style.tall}
              fluid={fluid}
              alt="panto"
            />
          ))}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPanto {
      title
      mainHeading
      blurb {
        json
      }
      pantoPics {
        id
        fluid {
          sizes
          src
          srcSet
          aspectRatio
        }
      }
    }
  }
`

export default Panto
