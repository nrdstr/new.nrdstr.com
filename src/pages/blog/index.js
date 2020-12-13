import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const Blog = ({ data }) => {

  const media = data.allWordpressWpMedia.edges

  useEffect(() => {
    const body = document.querySelector('body')
    body.scrollTo(0, 0)
  }, [])

  return (
    <Layout page='blog'>
      <SEO title='Nrdstr Blog' description="Photoshop tutorials, social media features, photoshop texture and brush packs, coding tutorials, and more! The Nrstr blog offers all sorts of information, and sometimes opinions, on web tech and design." url='/blog' />
      <div className='blog-wrapper animate--fade-in'>
        <h1 className='blog__heading'>n.blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          let featured
          media.map(m => {
            if (m.node.title === node.title) {
              featured = <Img
                fluid={m.node.localFile.childImageSharp.fluid}
                alt={m.node.title}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  margin: '7px 0'
                }} />
            }
          })
          return (
            <div key={node.slug} className='blog-container' >
              <Link className='blog' to={node.slug}>

                <h3>{node.title}</h3>
                {
                  featured && featured
                }
                <p className='blog__date'>{node.date}</p>
                <div className='blog__categories'>
                  {node.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
                </div>
                <div className='blog__excerpt' dangerouslySetInnerHTML={{ __html: `${node.excerpt.slice(0, 235)}<span style='color: rgb(30, 195, 196); font-weight: bold;'>read more &#8594;</span></p>` }} />
                <div className='shape__container services__shape'>
                  <div className='shape zig-zag divider' style={{ borderColor: 'rgb(241, 123, 165)' }} />
                  <div className='shape zig-zag divider' style={{ marginLeft: 3, borderColor: 'rgb(241, 123, 165)' }} />
                </div>
              </Link>
            </div>
          )
        })
        }
        <Footer />
      </div>
    </Layout >
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MM-DD-YYYY")
          content
          categories {
            name
          }
        }
      }
    }
    allWordpressWpMedia {
      edges {
        node {
          source_url
          title
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`