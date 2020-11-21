import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const PostImage = ({ src, alt, width }) => {
    const { allWordpressWpMedia } = useStaticQuery(allMedia)
    const originalSource = src.replace(/^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g, '$1.$3')
    const image = allWordpressWpMedia.edges.find(({ node }) => node.source_url === originalSource)

    return image == null || image.node.localFile.childImageSharp == null ? (
        <img
            src={src}
            alt={alt}
            style={{ width: width ? width : '100%' }} />
    ) : (
            <Img
                fluid={image.node.localFile.childImageSharp.fluid}
                alt={alt}
                style={{
                    width: width ? width + 'px' : '100%',
                    maxWidth: '100%'
                }} />
        )
}

export default PostImage

const allMedia = graphql`
query {
  allWordpressWpMedia {
    edges {
      node {
        source_url
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
}
`