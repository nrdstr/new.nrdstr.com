import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import useReadingTime from 'use-reading-time'
import { Link } from 'gatsby'
import Footer from '../components/Footer'
import { DiscussionEmbed } from 'disqus-react'
import SEO from '../components/seo'
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
  InstapaperIcon
} from "react-share"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  const content = useRef()
  const [featuredImg, setFeaturedImg] = useState('')
  const { readingTime } = useReadingTime(content)
  console.log(data)

  const disqusConfig = {
    shortname: `nrdstr`,
    config: { identifier: post.slug, title: post.title, url: `https://nrdstr.com/blog/${post.slug}` },
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.scrollTo(0, 0)
    if (post && content) setFeaturedImg(content.current.children[0].children[0].src)
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
        description={`${post.excerpt.slice(3, 350)}...`}
        url={`/blog/${post.slug}`}
        schemaMarkup={schema}
        image={featuredImg} />
      <div className='blog-post-container animate--fade-in'>
        <div className='blog-post-top'>
          <Link className='blog-post__back' to='/blog'>&#8592; back</Link>
        </div>
        <div className='blog-post'>
          <h1>{post.title}</h1>
          {/* <p className='blog-post__author'>{post.author.name}</p> */}
          <p className='blog-post__date'>{post.date} <span className='blog-post__square' /> <strong>{readingTime}</strong> min read</p>
          <div className='blog__categories'>
            {post.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
          </div>
          <div className='blog-post__social-share-container'>


            <TwitterShareButton title={post.title} via='@nrdstr_' url={url}>
              <TwitterIcon size={iconSize} />
            </TwitterShareButton>
            <FacebookShareButton url={url}>
              <FacebookIcon size={iconSize} />
            </FacebookShareButton>
            <PinterestShareButton media={featuredImg} url={url} description={`${post.excerpt.slice(3, 300)}...`}>
              <PinterestIcon size={iconSize} />
            </PinterestShareButton>
            <LinkedinShareButton title={post.title} summary={`${post.excerpt.slice(3, 300)}...`} source='nrdstr.com' url={url}>
              <LinkedinIcon size={iconSize} />
            </LinkedinShareButton>
            <RedditShareButton title={post.title} url={url}>
              <RedditIcon size={iconSize} />
            </RedditShareButton>
            <TumblrShareButton title={post.title} caption={`${post.excerpt.slice(3, 300)}...`} url={url}>
              <TumblrIcon size={iconSize} />
            </TumblrShareButton>
            <EmailShareButton subject={post.title} body={'Checkout this post from nrdstr!'} url={url}>
              <EmailIcon size={iconSize} />
            </EmailShareButton>
          </div>
          <div ref={content} className='blog-post__content' dangerouslySetInnerHTML={{ __html: post.content }} />
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
          content
          excerpt
          internal {
            owner
          }
          categories {
            name
          }
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