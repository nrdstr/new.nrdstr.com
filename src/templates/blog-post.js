import React, { useRef } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import useReadingTime from 'use-reading-time'
import { Link } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  const content = useRef()
  const { readingTime } = useReadingTime(content)
  console.log(post)
  return (
    <Layout page='blog-post'>
      <SEO title={post.title} description={`${post.excerpt.slice(3, 300)}...`} url='/blog' />
      <div className='blog-post-container animate--fade-in'>
        <div className='blog-post-top'>
          <Link className='blog-post__back' to='/blog'>&#8592; back</Link>
        </div>
        <div className='blog-post'>
          <h1>{post.title}</h1>
          {/* <p className='blog-post__author'>{post.author.name}</p> */}
          <p className='blog-post__date'>{post.date} <span className='blog-post__square' /> <strong>{readingTime}</strong> min read</p>
          <div ref={content} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          excerpt
          _links {
            wp_featuredmedia {
              href
              embeddable
            }
          }
          slug
          date(formatString: "MM-DD-YYYY")
          author
        }
      }
    }
  }`