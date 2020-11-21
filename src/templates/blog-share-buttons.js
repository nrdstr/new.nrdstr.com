import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TumblrShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TumblrIcon,
    EmailIcon
} from "react-share"

export default ({ title, summary, url, iconSize, featuredImg }) => (
    <div className='blog-post__social-share-container'>
        <TwitterShareButton title={title} via='nrdstr_' url={url}>
            <TwitterIcon size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
            <FacebookIcon size={iconSize} />
        </FacebookShareButton>
        <PinterestShareButton media={featuredImg} url={url} description={summary}>
            <PinterestIcon size={iconSize} />
        </PinterestShareButton>
        <LinkedinShareButton title={title} summary={summary} source='nrdstr.com' url={url}>
            <LinkedinIcon size={iconSize} />
        </LinkedinShareButton>
        <RedditShareButton title={title} url={url}>
            <RedditIcon size={iconSize} />
        </RedditShareButton>
        <TumblrShareButton title={title} caption={summary} url={url}>
            <TumblrIcon size={iconSize} />
        </TumblrShareButton>
        <EmailShareButton subject={title} body={'Checkout this post from nrdstr!'} url={url}>
            <EmailIcon size={iconSize} />
        </EmailShareButton>
    </div>
)