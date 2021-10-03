import styled from "styled-components"
import { device } from "../../globalStyle"
import { GatsbyImage } from "gatsby-plugin-image"

export const RightContainer = styled.div`
  flex: 1;
  background-color: "blue";
  margin-left: 20px;

  @media ${device.tablet} {
    display: none;
  }

  h3 {
    color: orange;
  }

  .recent_post {
    display: flex;
    margin: 20px 0;
    border-bottom: 1px solid white;
    padding-bottom: 15px;

    .info {
      color: white;
      margin-left: 15px;
      align-self: flex-end;
      span {
        display: block;
      }
      .article_date {
        font-style: italic;
        font-size: 0.6rem;
        padding-bottom: 2px;
        color: white;
        text-decoration: underline;
      }
      .article_title {
        color: white;
      }
    }
  }

  .categories_box {
    h3 {
      margin: 20px 0;
    }
    a {
      display: block;
      color: white;
      font-size: 0.9rem;
      margin-bottom: 10px;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const StyledImg = styled(GatsbyImage)`
  height: 100px;
  width: 100px;

  transition: all 0.5s ease-in-out;
  filter: brightness(0.6);

  &:hover {
    transform: translateX(3%);
    filter: brightness(1);
  }
`
