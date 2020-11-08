import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {

    return (
        <Layout page='blog'>
            <SEO title='nrdstr blog' description="Coding tutorials,photoshop texture and brush packs, and even some project retrospect. The Nrstr blog offers all sorts of information on web tech and design" url='/blog' />
            <div className='blog-wrapper animate--fade-in'>
                <h1 className='blog__heading'>n.blog</h1>
                {data.allWordpressPost.edges.map(({ node }) => {
                    return (
                        <div key={node.slug} className='blog-container' >
                            <Link className='blog' to={node.slug}>
                                <h3>{node.title}</h3>
                                <p className='blog__date'>{node.date}</p>
                                <div className='blog__categories'>
                                    {node.categories.map(cat => <p className='modal__web-tag blog__tag'>{cat.name}</p>)}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </Link>
                        </div>
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