import { useStaticQuery, graphql } from "gatsby"

const useCategoryQuery = () => {
  const dataCategory = useStaticQuery(graphql`
    {
      allWpCategory {
        nodes {
          name
          id
          slug
        }
      }
    }
  `)
  return dataCategory
}

export default useCategoryQuery
