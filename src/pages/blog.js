import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {

  return (
    <Layout page='blog'>
      <SEO title='nrdstr blog' description="Photoshop tutorials, social media features, photoshop texture and brush packs, coding tutorials, and more! The Nrstr blog offers all sorts of information, and sometimes opinions, on web tech and design." url='/blog' />
      <div className='blog-wrapper animate--fade-in'>
        <h1 className='blog__heading'>n.blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          return (
            <>
              <div key={node.slug} className='blog-container' >
                <Link className='blog' to={node.slug}>

                  <h3>{node.title}</h3>
                  <p className='blog__date'>{node.date}</p>
                  <div className='blog__categories'>
                    {node.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
                  </div>
                  <div className='blog__excerpt' dangerouslySetInnerHTML={{ __html: `${node.excerpt.slice(0, 210)}...<span style='color: rgb(30, 195, 196); font-weight: bold;'>read more &#8594;</span></p>` }} />
                  <div className='shape__container services__shape'>
                    <div className='shape zig-zag divider' style={{ borderColor: 'rgb(241, 123, 165)' }} />
                    <div className='shape zig-zag divider' style={{ marginLeft: 3, borderColor: 'rgb(241, 123, 165)' }} />
                  </div>
                </Link>
              </div>
            </>
          )
        })
        }
      </div>
    </Layout >
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
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
  }`