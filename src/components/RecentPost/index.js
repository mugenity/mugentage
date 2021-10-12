import React from "react"
import useArticleQuery from "../..//hooks/useArticlesQuery"
import useCategoryQuery from "../../hooks/useCategoryQuery"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { RightContainer, StyledImg } from "./styles"

const RecentPost = () => {
  const data = useArticleQuery()
  const { allWpPost } = data
  const recentArticles = allWpPost.nodes.slice(0, 3)

  const categoryData = useCategoryQuery()
  const { allWpCategory } = categoryData
  return (
    <RightContainer>
      <h3>Recent Posts</h3>
      {recentArticles.map(post => {
        const thumbnail = getImage(post.featuredImage.node.localFile)

        return (
          <div key={post.id} className="recent_post">
            <div className="thumbnail">
              <Link to={`/blog${post.uri}`}>
                <StyledImg image={thumbnail} alt={post.title} />
              </Link>
            </div>

            <div className="info">
              <Link to={`/blog${post.uri}`}>
                <span className="article_date"> {post.date} </span>
                <span className="article_title"> {post.title} </span>
              </Link>
            </div>
          </div>
        )
      })}

      <div className="categories_box">
        <h3>Categories</h3>
        {allWpCategory.nodes.map(cat => {
          return (
            <Link key={cat.id} to={`/category/${cat.slug}`}>
              #{cat.name}
            </Link>
          )
        })}
      </div>
    </RightContainer>
  )
}

export default RecentPost
