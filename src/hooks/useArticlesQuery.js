import { useStaticQuery, graphql } from "gatsby"

const useArticleQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
          date(formatString: "MMMM DD, YYYY")
          title
          content
          excerpt
          id
          uri
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}

export default useArticleQuery
