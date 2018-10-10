import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Panto = () => (
  <Layout>
    <header>Pantomime</header>
    <div>
      <section className="images">.images</section>
      <main>
        <p>
          Cal is an all round entertainer and able to adapt his act from adult
          only to family shows! He was a member of the Award Winning Pantomime
          'The Lambton Worm' at The Customs House, South Shields. Playing the
          batty, wacky, silly Lord Lambton!
        </p>
        <p>You may have also seen Cal as The Wizard in 'The Wizard Of Oz'</p>
        <p>
          If you are interested in booking cal for your pantomime message him
          now!
        </p>
        <button>Message Now</button>
      </main>
    </div>
  </Layout>
)

export default Panto
