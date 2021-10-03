import React from "react"
import Layout from "../Layout"
import RecentPost from "../components/RecentPost"
import { graphql } from "gatsby"
import { Container } from "./category.styles"
import Articles from "../components/Articles"

const CategoryPage = props => {
  const { data, pageContext } = props

  return (
    <Layout>
      <Container>
        <div className="title">
          <h3>
            CATEGORY: <span>{pageContext.name}</span>
          </h3>
        </div>
        <div className="wrapper">
          <div className="left_box">
            <Articles articles={data.allWpPost.nodes} col="3" />
          </div>
          <RecentPost />
        </div>
      </Container>
    </Layout>
  )
}

export const CategoryPost = graphql`
  query CategoryId($id: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      nodes {
        content
        date(formatString: "MMMM DD, YYYY")
        id
        title
        uri
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
`

export default CategoryPage
