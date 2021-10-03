import styled from "styled-components"
import { device } from "../../globalStyle"
import { GatsbyImage } from "gatsby-plugin-image"

export const Container = styled.section`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(${props => props.col || 4}, 1fr);

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }

  .blog_post_container {
    cursor: pointer;
    width: 100%;
    height: 500px;
    transition: all ease-in 0.5s;
    border: 3px solid white;
    overflow: hidden;

    .content {
      position: relative;

      &:hover .article_infos h3::before {
        visibility: visible;
        width: 97%;
      }

      .article_infos {
        position: absolute;
        top: 88%;
        color: white;
        text-align: center;
        width: 100%;
        span {
          font-style: italic;
        }

        h3 {
          font-size: 1.8rem;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 33px;
            right: 0;
            background-color: orange;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
`

export const StyledImg = styled(GatsbyImage)`
  height: 500px;
  transition: all 0.5s ease-in-out;
  filter: brightness(0.5);

  &:hover {
    transform: translateX(3%);
    filter: brightness(1);
  }
`
