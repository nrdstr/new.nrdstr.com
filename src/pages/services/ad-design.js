import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Service from '../../components/service'
import SEO from "../../components/seo"

const AdDesign = () => (
    <Layout page='service-ad-design'>
        <SEO title='advertisement design' description="" url='/services/ad-design' />
        <Service type='ad-design' />
    </Layout>
)

export default AdDesign
