import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Service from '../../components/service'

const GraphicDesign = () => (
    <Layout page='service-graphic-design'>
        <SEO title='graphic design' description="" url='/services/graphic-design' />
        <Service type='graphic-design' />
    </Layout>
)

export default GraphicDesign
