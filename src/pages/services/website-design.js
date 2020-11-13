import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Service from '../../components/service'

const WebSiteDesign = () => (
    <Layout page='service-website-design'>
        <SEO title='website design' description="" url='/services/website-design' />
        <Service type='website-design' />
    </Layout>
)

export default WebSiteDesign
