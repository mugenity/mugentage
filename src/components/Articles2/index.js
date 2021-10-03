import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import useArticleQuery from "../../hooks/useArticlesQuery"
import { Container, StyledImg } from "./styles"

const Articles2 = () => {
  const data = useArticleQuery()
  const { allWpPost } = data
  const totalPosts = allWpPost.nodes.length
  const articles2 = allWpPost.nodes.slice(8, totalPosts)

  return (
    <Container>
      {articles2.map((post, i) => {
        const articleImg = getImage(
          post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
        )

        return (
          <div key={post.id} className={`blog_post_container post${i + 1} `}>
            <Link to={`blog${post.uri}`}>
              <div className="content">
                <StyledImg image={articleImg} alt={`${post.title} image`} />
                <div className="article_infos">
                  <span>{post.date}</span>
                  <h3> {post.title} </h3>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default Articles2
