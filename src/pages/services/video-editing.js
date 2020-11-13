import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Service from '../../components/service'

const VideoEditing = () => (
    <Layout page='service-graphic-design'>
        <SEO title='video editing' description="" url='/services/video-editing' />
        <Service type='video-editing' />
    </Layout>
)

export default VideoEditing
