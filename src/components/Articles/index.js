import React from "react"
import { getImage } from "gatsby-plugin-image"
import { Container, StyledImg } from "./styles"
import { Link } from "gatsby"

const Articles = ({ articles, col }) => {
  return (
    <Container col={col}>
      {articles.map(post => {
        const articleImg = getImage(
          post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
        )
        return (
          <div key={post.id} className="blog_post_container">
            <Link to={`/blog${post.uri}`}>
              <div className="content">
                <StyledImg image={articleImg} alt={`${post.title} image`} />
                <div className="article_infos">
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default Articles
