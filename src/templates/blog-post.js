import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import useReadingTime from 'use-reading-time'
import { Link, navigate } from 'gatsby'
import BlogShareButtons from './blog-share-buttons'
import Footer from '../components/Footer'
import { DiscussionEmbed } from 'disqus-react'
import parse from 'html-react-parser'
import PostImage from './blog-post-image'
import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  const content = useRef()
  const { readingTime } = useReadingTime(content)
  let featuredImg

  data.allWordpressWpMedia.edges.map(m => {
    if (m.node.title === post.title) featuredImg = m.node.localFile.publicURL
  })

  const disqusConfig = {
    shortname: `nrdstr`,
    config: { identifier: post.slug, title: post.title, url: `https://nrdstr.com/blog/${post.slug}` },
  }

  // const getImage = node => {
  //   if (node.name === 'img') {
  //     return node
  //   } else if (node.children != null) {
  //     for (let index = 0; index < node.children.length; index++) {
  //       let image = getImage(node.children[index])
  //       if (image != null) return image
  //     }
  //   }
  // }

  const replaceMedia = node => {
    if (node.name === 'img') {
      return <PostImage src={node.attribs.src} alt={node.attribs.alt} width={node.attribs.width} />
    }
    // if (node.name === 'p') {
    //   const image = getImage(node)
    //   if (image != null) {
    //     return <PostImage src={image.attribs.src} alt={image.attribs.alt} width={image.attribs.width} />
    //   }
    // }
  }

  const handleNavigate = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.scrollTo(0, 0)
    if (content.current.children) {
      const video = document.querySelector('.wp-block-embed__wrapper')
      if (video) video.children[0].classList.add('blog__video-iframe')

      const links = content.current.querySelectorAll('#link')
      if (links) {
        links.forEach(link => {
          const path = link.pathname
          link.addEventListener('click', e => handleNavigate(e, path))
        })
      }
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
    "datePublished": post.date.split('-').reverse().join('-')
  }

  const url = `https://nrdstr.com/blog/${post.slug}`
  const iconSize = 40

  return (
    <Layout page='blog-post'>
      <SEO title={post.title}
        description={`${post.excerpt.slice(3, 300)}...`}
        url={`/blog/${post.slug}`}
        schemaMarkup={schema}
        image={featuredImg} />
      <div className='blog-post-container animate--fade-in'>
        <div className='blog-post-top'>
          <Link className='blog-post__back' to='/blog'>&#8592; back</Link>
        </div>
        <div className='blog-post'>
          <h1>{post.title}</h1>
          <p className='blog-post__author'>- <strong>{post.author.name}</strong></p>

          <p className='blog-post__date'>
            {post.date} <span className='blog-post__square' /> <strong>{readingTime}</strong> min read
          </p>
          <div className='blog__categories'>
            {post.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
          </div>
          <BlogShareButtons title={post.title}
            url={url}
            summary={`${post.excerpt.slice(3, 300)}...`}
            featuredImg={featuredImg}
            iconSize={iconSize} />
          <div ref={content} className='blog-post__content'>{parse(post.content, { replace: replaceMedia })}</div>
          <div className='shape__container blog-post__divider'>
            <div className='shape zig-zag divider' style={{ borderColor: 'rgb(254, 254, 81)' }} />
            <div className='shape zig-zag divider' style={{ marginLeft: 3, borderColor: 'rgb(254, 254, 81)' }} />
          </div>
          <DiscussionEmbed className='blog-post__comments' {...disqusConfig} />
          <Footer />
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
          author {
            avatar_urls {
              wordpress_96
            }
            name
          }
          content
          excerpt
          internal {
            owner
          }
          categories {
            name
          }
          slug
          date(formatString: "MM-DD-YYYY")
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
          }
        }
      }
    }
  }`