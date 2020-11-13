import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Instagram = () => {
  const [totalPosts, setTotalPosts] = useState(9)

  const data = useStaticQuery(graphql`
      query FetchAllInstaNode {
        allInstaNode(sort: { fields: timestamp, order: ASC }) {
          edges {
            node {
              thumbnails {
                src
              }
              mediaType
            }
          }
        }
      }
      `)

  const handleLoadMorePosts = () => setTotalPosts(totalPosts + 9)

  const thumbnails = data.allInstaNode.edges.filter(t => t.node.mediaType === 'GraphImage')
  if (thumbnails) {
    return (
      <>
        <div id='ig' className='instagram'>

          {
            thumbnails.reverse().slice(0, 18).map((thumb, i) => {
              const src = thumb.node.thumbnails[1].src
              return <img className='instagram__img animate--fade-in-fast' key={i} src={src} />
            })
          }
        </div>
        {/* <button onClick={handleLoadMorePosts} title='load more instagram posts' className='instagram__btn'>load more</button> */}
      </>
    )
  } else {
    return (
      <div className='instagram'><h3>LOADING</h3></div>
    )
  }
}

export default Instagram