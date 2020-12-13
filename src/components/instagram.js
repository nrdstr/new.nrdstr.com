import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Instagram = () => {

  // const data = useStaticQuery(graphql`
  //     query FetchAllInstaNode {
  //       allInstaNode(sort: { fields: timestamp, order: ASC }) {
  //         edges {
  //           node {
  //             thumbnails {
  //               src
  //             }
  //             mediaType
  //           }
  //         }
  //       }
  //     }
  //     `)

  const thumbnails = data.allInstaNode.edges.filter(t => t.node.mediaType === 'GraphImage')
  if (thumbnails) {
    return (
      <div className='instagram-container'>
        <div id='ig' className='instagram'>
          {
            thumbnails.reverse().slice(0, 18).map((thumb, i) => {
              const src = thumb.node.thumbnails[3].src
              return <img className='instagram__img animate--fade-in-fast' key={i} src={src} />
            })
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className='instagram'><h3>LOADING</h3></div>
    )
  }
}

export default Instagram