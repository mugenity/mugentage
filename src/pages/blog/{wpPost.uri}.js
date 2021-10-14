import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Wrapper, TitleImg, CommentBox } from "../../post.styles"
import Seo from "../../components/SEO"
import Layout from "../../Layout"
import parse from "html-react-parser"
import { Link } from "gatsby"
import RecentPost from "../../components/RecentPost"
import { DiscussionEmbed } from "disqus-react"

const ArticleTemp = ({ data: { wpPost } }) => {
  const { title, date, excerpt, content, categories, featuredImage } = wpPost
  const image = getImage(featuredImage.node.localFile)

  const disqusConfig = {
    shortname: "mugentage",
    config: { identifier: title },
  }

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <Wrapper>
        <div className="left_container">
          <article>
            <TitleImg image={image} alt={`${title}-image`} />
            {!!content && (
              <section>
                <div className="article_title">
                  <span className="article_date">{date}</span>
                  <Link to={`/category/${categories.nodes[0].slug}`}>
                    #{categories.nodes[0].slug}
                  </Link>
                </div>
                <div className="content">
                  <h3> {title} </h3>
                  <div className="article_content">{parse(content)}</div>
                </div>
              </section>
            )}
            <hr />
          </article>
        </div>
        <RecentPost />
      </Wrapper>
      <CommentBox>
        <DiscussionEmbed {...disqusConfig} />
      </CommentBox>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      content
      uri
      categories {
        nodes {
          id
          name
          slug
        }
      }
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default ArticleTemp
