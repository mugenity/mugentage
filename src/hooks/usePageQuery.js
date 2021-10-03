import { useStaticQuery, graphql } from "gatsby"

const usePageQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage {
        nodes {
          title
          uri
          id
        }
      }
    }
  `)
  return data
}

export default usePageQuery
