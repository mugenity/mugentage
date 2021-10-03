import styled from "styled-components"
import { device } from "../../globalStyle"

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 9998;

  @media ${device.mobileL} {
    padding: 0 10px;
  }

  .left_content {
    position: relative;
    .logo {
      z-index: 9998;

      a {
        font-size: 1.8rem;
        color: white;
        font-family: limelight;

        .point {
          transition: 0.5s all ease-in-out;
        }

        &:hover .point {
          color: orange;
        }
      }
      h5 {
        font-size: 0.68rem;
        margin-left: 28px;

        span {
          position: relative;
          color: orange;
          overflow: hidden;
          display: block;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: white;
            animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
            transform: translateX(-101%);
          }

          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: orange;
            animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
            transform: translateX(0);
          }

          @keyframes a-ltr-after {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(101%);
            }
          }

          @keyframes a-ltr-before {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(200%);
            }
          }
        }
      }
    }
    .search {
      position: absolute;
      top: 55px;
    }
  }

  .right_content {
    display: flex;
    .social_media {
      font-family: limelight;
      margin-right: 30px;

      a {
        margin-right: 20px;
        color: white;
        position: relative;
        z-index: 1;
        -webkit-transition: -webkit-transform ease-out 0.1s;
        -moz-transition: -moz-transform ease-out 0.1s;
        transition: transform ease-out 0.1s;

        &:hover {
          color: orange;
        }

        &:after {
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          content: "";
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          top: 0;
          left: 0;
          padding: 0;
        }

        &:hover:after {
          -webkit-animation: sonarEffect 1.3s ease-out 75ms;
          -moz-animation: sonarEffect 1.3s ease-out 75ms;
          animation: sonarEffect 1.3s ease-out 75ms;
        }

        @keyframes sonarEffect {
          0% {
            opacity: 0.3;
          }
          40% {
            opacity: 0.5;
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px orange,
              0 0 0 10px rgba(255, 255, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px orange,
              0 0 0 10px rgba(255, 255, 255, 0.5);
            transform: scale(1.5);
            opacity: 0;
          }
        }
      }
    }

    .burger_menu {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      margin-top: 5px;
      overflow: hidden;
      z-index: 9998;

      &:hover .line1 {
        animation-name: slide;
        animation-duration: 0.6s;
      }

      &:hover .line2 {
        animation-name: slide2;
        animation-duration: 0.6s;
      }

      .line1,
      .line2 {
        width: 50px;
        height: 2px;
        left: 0;
        background-color: white;
        margin-bottom: 5px;
        position: relative;
        overflow: hidden;
      }

      @keyframes slide2 {
        0% {
          left: 0;
        }
        50% {
          left: -100%;
        }
        100% {
          left: 0;
        }
      }

      @keyframes slide {
        0% {
          left: 0;
        }
        50% {
          left: 100%;
        }
        100% {
          left: 0;
        }
      }
    }
  }
`

export const Line1 = styled.div`
  background-color: orange !important;
  width: ${props => props.open && "25px"} !important;
  transition: 0.5s all ease-in-out;
`
