import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import useReadingTime from 'use-reading-time'
import { Link } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  const content = useRef()
  const [featuredImg, setFeaturedImg] = useState('')
  const { readingTime } = useReadingTime(content)
  // const featuredImgUrl = content.current.children[0].children[0].src || ``

  useEffect(() => {
    if (post && content) {
      setFeaturedImg(content.current.children[0].children[0].src)
    }
  }, [post])

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nrdstr.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": `${post.excerpt.slice(3, 300)}...`,
    "image": featuredImg,
    "author": {
      "@type": "Organization",
      "name": "nrdstr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "nrdstr design group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nrdstr.com/nrdstr-logo.png"
      }
    },
    "datePublished": post.date
  }

  return (
    <Layout page='blog-post'>
      <SEO title={post.title} description={`${post.excerpt.slice(3, 300)}...`} url={`/blog/${post.slug}`} schemaMarkup={schema} />
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