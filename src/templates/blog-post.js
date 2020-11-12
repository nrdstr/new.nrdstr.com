import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import useReadingTime from 'use-reading-time'
import { Link } from 'gatsby'
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
  // const disqusConfig = {
  //   url: `https://nrdstr.com/blog/${post.slug}`,
  //   identifier: post.slug,
  //   title: post.title
  // }

  const disqusConfig = {
    shortname: `nrdstr`,
    config: { identifier: post.slug, title: post.title, url: `https://nrdstr.com/blog/${post.slug}` },
  }
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

  const url = `https://nrdstr.com/blog/${post.slug}`
  const iconSize = 40

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
          <div className='blog__categories'>
            {post.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
          </div>
          <div className='blog-post__social-share-container'>
            <EmailShareButton subject={post.title} body={'Checkout this post from nrdstr!'} url={url}>
              <EmailIcon size={iconSize} />
            </EmailShareButton>
            <FacebookShareButton url={url}>
              <FacebookIcon size={iconSize} />
            </FacebookShareButton>
            <InstapaperShareButton url={url} title={post.title} description={`${post.excerpt.slice(3, 300)}...`}>
              <InstapaperIcon size={iconSize} />
            </InstapaperShareButton>
            <LinkedinShareButton title={post.title} summary={`${post.excerpt.slice(3, 300)}...`} source='nrdstr.com' url={url}>
              <LinkedinIcon size={iconSize} />
            </LinkedinShareButton>
            <PinterestShareButton media={featuredImg} url={url} description={`${post.excerpt.slice(3, 300)}...`}>
              <PinterestIcon size={iconSize} />
            </PinterestShareButton>
            <RedditShareButton title={post.title} url={url}>
              <RedditIcon size={iconSize} />
            </RedditShareButton>
            <TelegramShareButton title={post.title} url={url}>
              <TelegramIcon size={iconSize} />
            </TelegramShareButton>
            <TumblrShareButton title={post.title} caption={`${post.excerpt.slice(3, 300)}...`} url={url}>
              <TumblrIcon size={iconSize} />
            </TumblrShareButton>
            <TwitterShareButton title={post.title} via='@nrdstr_' url={url}>
              <TwitterIcon size={iconSize} />
            </TwitterShareButton>
            <VKShareButton title={post.title} image={featuredImg} url={url}>
              <VKIcon size={iconSize} />
            </VKShareButton>
          </div>
          <div ref={content} dangerouslySetInnerHTML={{ __html: post.content }} />
          <DiscussionEmbed className='blog-post__comments' {...disqusConfig} />
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