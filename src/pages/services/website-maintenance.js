import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from '../../components/Footer'
import Service from '../../components/service'

const description = `
<p>web maintenance</p>
`

const WebSiteMaintenance = () => (
    <Layout page='service-website-maintenance'>
        <SEO title='website maintenance' description="" url='/services/website-maintenance' />
        <Service type='website-maintenance' description={description} />
        <Footer />
    </Layout>
)

export default WebSiteMaintenance
