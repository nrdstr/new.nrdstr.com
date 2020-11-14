import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Service from '../../components/service'
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const AdDesign = () => (
    <Layout page='service-ad-design'>
        <SEO title='advertisement design' description="" url='/services/ad-design' />
        <Service type='ad-design' />
        <Footer />
    </Layout>
)

export default AdDesign
