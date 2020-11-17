import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../../components/layout"
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const Latest = ({ data }) => {

    useEffect(() => {
        if (data) {
            const slug = data.allWordpressPost.edges[0].node.slug
            navigate(`/blog/${slug}`)
        }
    }, [data])

    return (
        <Layout page='latest'>
            <SEO title="nrdstr's latest post" description="Photoshop tutorials, art and social media features, photoshop texture and brush packs, coding tutorials, and more. The Nrstr blog offers all sorts of information, and sometimes opinions, on web tech and design." url='/blog/latest' />
            <div style={{ display: 'flex', flex: 1, alignItems: 'center' }} className='animate--fade-in'>
                <p style={{ color: '#fefefe', fontSize: 'clamp(1.7rem, 3vw, 3rem)', fontFamily: 'Montserrat', fontWeight: 700 }}>getting the latest post!</p>
                <Footer />
            </div>
        </Layout >
    )
}

export default Latest

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          slug
        }
      }
    }
  }`