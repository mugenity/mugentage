import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImage = styled(GatsbyImage)`
  width: 220px;
  height: 220px;
`

export const Container = styled.section`
  overflow: hidden;
  .title {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 1.6rem;
      text-transform: uppercase;
    }
  }

  .instagram_feed_box {
    position: relative;
    .btn {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      button {
        border: none;
        background: none;
        cursor: pointer;
      }

      .prev_btn {
        margin-left: 30px;
      }
      .next_btn {
        margin-right: 30px;
      }
    }
  }
`
