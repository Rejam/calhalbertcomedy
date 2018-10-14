import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
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
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
