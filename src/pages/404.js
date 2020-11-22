import React from "react"

import Layout from "../components/layout"
import Div100vh from 'react-div-100vh'
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout page='not-found'>
    <SEO title="404: Not found" />
    <Div100vh className='not-found'>
      <h1>404</h1>
      <p>i think you might've hit a dead end. omg that sucks lol.</p>
      <Link className='home__cta-btn home__cta-btn--blog' to='/' title='home'>
        go home
      </Link>
    </Div100vh>
  </Layout>
)

export default NotFoundPage
