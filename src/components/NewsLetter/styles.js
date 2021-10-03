import styled from "styled-components"
import { device } from "../../globalStyle"

export const Container = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }

  .img_box {
    flex: 2;
    height: 580px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .newsletter_box {
    flex: 2;
    margin-left: 30px;
    display: flex;
    align-items: center;

    @media ${device.tablet} {
      padding-bottom: 20px;
    }

    .content {
      width: 80%;
      margin: 0 auto;

      .title {
        text-align: center;
        margin-bottom: 10px;

        img {
          transition: 1s all ease-in-out;
          position: relative;
          animation-name: move;
          animation-duration: 0.5s;
          animation-timing-function: ease-in-out;
          animation-direction: alternate;
          animation-iteration-count: infinite;
          @keyframes move {
            0% {
              top: 0;
            }
            100% {
              top: -10px;
            }
          }
        }

        h3 {
          font-size: 2rem;
          text-transform: uppercase;

          @media ${device.mobileL} {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`
