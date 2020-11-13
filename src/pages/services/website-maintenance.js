import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Service from '../../components/service'

const WebSiteMaintenance = () => (
    <Layout page='service-website-maintenance'>
        <SEO title='website maintenance' description="" url='/services/website-maintenance' />
        <Service type='website-maintenance' />
    </Layout>
)

export default WebSiteMaintenance
