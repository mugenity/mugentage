import styled from "styled-components"
import { device } from "../../globalStyle"

export const Container = styled.div`
  position: fixed;
  background-color: #1a1007e6;
  height: 100%;
  width: 100%;
  opacity: ${props => (props.open ? "1" : "0")};
  visibility: ${props => !props.open && "hidden"};
  transition: 0.8s all ease-in-out;
  z-index: 9998;

  nav {
    ul {
      margin-top: 130px;
      margin-left: 45px;
      li {
        line-height: 80px;
        overflow: hidden;

        a {
          color: white;
          opacity: 0.8;
          font-size: 3.5rem;
          position: relative;

          &:hover {
            color: orange;
          }

          &:hover :after {
            left: 0;
          }

          &::after {
            content: "";
            position: absolute;
            top: 55%;
            left: -100%;
            height: 3px;
            width: 100%;
            background-color: white;
            transition: 0.2s all ease-in-out;
          }
        }
      }
    }
    .separation_line {
      height: 1px;
      width: 500px;
      background-color: white;
      margin-left: 45px;
      margin-top: 30px;

      @media ${device.mobileL} {
        width: 300px;
      }
    }
    .social_media {
      margin-left: 45px;
      padding: 10px 0;
      display: flex;
      font-size: 0.8rem;
      span {
        color: orange;
      }
      .social_links {
        margin-top: 1px;
        a {
          font-family: limelight;
          margin-left: 20px;
          color: white;
          opacity: 0.8;
          position: relative;

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
              box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
                0 0 10px 10px orange, 0 0 0 10px rgba(255, 255, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
                0 0 10px 10px orange, 0 0 0 10px rgba(255, 255, 255, 0.5);
              transform: scale(1.5);
              opacity: 0;
            }
          }
        }
      }
    }
  }
`
