import { useStaticQuery, graphql } from "gatsby"

export const createSequence = (numb) => Array.from(new Array(numb), (val, index) => index + 1)

export const useFetchWordpressData = () => {
    return useStaticQuery(graphql`
    query FetchAllPosts {
        allWordpressPost {
        edges {
            node {
            content
            date(fromNow: true)
            title
            id
            slug
            status
            excerpt
            }
        }
        }
    }
`)
}
