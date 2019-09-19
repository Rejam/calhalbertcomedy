import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import style from '../css/voice.module.css'

const Voice = ({ data }) => {
  const {
    title,
    mainHeading,
    image,
    content,
    soundcloud,
  } = data.contentfulVoice

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Check out some of the voice over work that Cal has done."
        />
        <title>{title}</title>
        <link rel="canonical" href="https://calhalbertcomedy.co.uk/voice" />
      </Helmet>
      <main>
        <h1 className={style.heading}>{mainHeading}</h1>
        <section className={style.flex}>
          <section className={style.img}>
            <Img
              style={{ height: '100%' }}
              imgStyle={{ objectFit: 'cover', objectPosition: '60% 25%' }}
              fluid={image.fluid}
            />
          </section>

          <section className={style.articles}>
            <div dangerouslySetInnerHTML={{ __html: soundcloud.soundcloud }} />
            <div>{documentToReactComponents(content.json)}</div>
            <h2>Ask for a Demo</h2>
            <p>
              Cal offers a free demo of what you would like recording at no
              cost! Simply send him a message with all the details via the
              button below!
            </p>
            <Link className={style.button} to="/contact">
              Request a demo
            </Link>
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulVoice {
      title
      mainHeading
      image {
        fluid {
          sizes
          src
          srcSet
          aspectRatio
        }
      }
      soundcloud {
        soundcloud
      }
      content {
        json
      }
    }
  }
`

export default Voice
