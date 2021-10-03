import { useStaticQuery, graphql } from "gatsby"

const useInstagramQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allInstagramContent(limit: 10) {
        nodes {
          id
          permalink
          localImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return data
}

export default useInstagramQuery
