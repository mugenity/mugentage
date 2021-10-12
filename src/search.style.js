import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { device } from "./globalStyle"

export const SearchBox = styled.div`
  background-color: #1a1007e6;
  padding-top: 100px;

  .title {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 60px 0;

    h1 {
      color: white;
      text-align: center;
    }
  }

  .content_container {
    padding: 100px 80px 50px 80px;
    display: flex;
  }

  .filtered_articles {
    flex: 3;
    margin-right: 40px;

    .article_box {
      border-top: 1px solid white;
      padding: 20px 0;
      display: flex;

      @media ${device.tablet} {
        flex-direction: column;
        margin-top: 40px;
        padding-top: 20px;
      }

      .info {
        margin-left: 30px;

        @media ${device.tablet} {
          margin: 20px 0 10px;
        }

        a {
          color: orange;
          text-decoration: underline;
          font-size: 1.6rem;
        }
        .excerpt {
          color: white;
          margin-top: 20px;
          font-size: 0.8rem;
          text-align: justify;

          .more-link {
            display: none;
          }
        }
      }
    }
  }

  .page_numbers {
    color: white;
    display: flex;
    justify-content: center;
    padding: 20px 0;

    .active_page {
      color: #ffc65f;
    }

    li {
      margin-right: 10px;
      cursor: pointer;
    }
  }
`

export const StyledImage = styled(GatsbyImage)`
  width: 200px;
  height: 200px;

  @media ${device.tablet} {
    width: 100%;
  }
`
