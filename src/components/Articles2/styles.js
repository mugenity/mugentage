import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { device } from "../../globalStyle"

export const Container = styled.section`
  display: grid;
  grid-template-areas: "post1 post1 post2 post2";

  @media ${device.tablet} {
    grid-template-areas: "post1 post2";
  }
  @media ${device.mobileL} {
    grid-template-areas: none;
    grid-template-columns: repeat(1, 1fr);
  }

  .post1 {
    grid-area: post1;
    @media ${device.mobileL} {
      grid-area: unset;
    }
  }
  .post2 {
    grid-area: post2;
    @media ${device.mobileL} {
      grid-area: unset;
    }
  }
  .blog_post_container {
    cursor: pointer;
    width: 100%;
    height: 500px;
    overflow: hidden;
    transition: all ease-in 0.5s;
    border: 3px solid white;

    .content {
      position: relative;
      &:hover .article_infos h3::before {
        visibility: visible;
        width: 100%;
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
    transform: scale(1.1);
    filter: brightness(1);
  }
`
