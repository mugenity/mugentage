import styled from "styled-components"
import { device } from "../../globalStyle"
import containerImg from "../../Images/blog14.jpg"
import artCursor from "../../Images/artCursor.svg"

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${containerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: intro 2s ease forwards;

  @keyframes intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    cursor: url(${artCursor}), auto;

    .title {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 100%;

      @media ${device.mobileL} {
        align-items: center;
        padding-top: 50px;
      }
      h2 {
        font-weight: lighter;
        text-transform: uppercase;
        color: white;
        font-size: 4rem;
        text-align: center;
        width: 85%;
        margin: 0 auto;
        margin-bottom: 20px;

        span:last-child {
          color: orange;
          position: relative;
          animation-name: move;
          animation-duration: 0.5s;
          animation-delay: 3.3s;
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

        @media ${device.mobileL} {
          font-size: 3rem;
        }
      }
    }
  }

  .bubbles {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`
