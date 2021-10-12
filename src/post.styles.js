import styled from "styled-components"
import { device } from "./globalStyle"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  background-color: #1a1007e6;
  padding: 100px 80px 50px 80px;
  display: flex;

  @media ${device.tablet} {
    padding: 80px 20px;
  }

  .left_container {
    background-color: "white";
    flex: 3;

    .article_title {
      color: white;
      margin: 20px 0;

      .article_date {
        margin-right: 20px;
        font-style: italic;
        font-size: 0.8rem;
      }

      a {
        text-transform: uppercase;
        text-decoration: underline;
        color: white;
      }
    }

    .content {
      color: white;
      h3 {
        font-size: 2rem;
        margin: 10px 0;
        color: orange;
      }
      .article_content {
        margin-bottom: 20px;
        margin-left: 40px;

        p {
          font-size: 0.8rem;
          line-height: 20px;
          text-align: justify;
          text-justify: inter-word;

          &:first-child::first-letter {
            /* color: orange; */
            font-weight: bold;
            font-size: 60px;
            float: left;
            padding-right: 8px;
          }
        }
        figure {
          display: inline-block;
          margin: 20px 0;
          max-width: 300px;
          max-height: 400px;
        }
      }
    }
  }
`
export const TitleImg = styled(GatsbyImage)`
  height: 600px;
`

export const CommentBox = styled.div`
  background-color: #1a1007e6;

  #disqus_thread {
    width: 90%;
    padding-bottom: 30px;
    margin: 0 auto;
  }
`
