import styled from "styled-components"
import { device } from "../../globalStyle"

export const FooterBox = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  padding: 50px;

  .footer_content {
    display: flex;
    padding: 50px 0;

    .box1 {
      flex: 1;
      display: flex;
      flex-direction: column;

      .logo {
        font-size: 1.8rem;
        font-family: limelight;
      }

      .newsletter {
        margin-top: 50px;
        input {
          width: 80%;
          background: none;
          border: none;
          color: white;
          border-bottom: 1px solid white;
          padding: 10px 0;
          outline: none;
        }
      }
    }
    .box2 {
      flex: 1;
      display: flex;
      @media ${device.tablet} {
        margin-top: 30px;
      }
      @media ${device.mobileL} {
        flex-direction: column;
      }
      .title {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }

      .col {
        @media ${device.mobileL} {
          margin-bottom: 30px;
        }
      }
      .about {
        flex: 1;
        display: flex;
        flex-direction: column;
        span {
          line-height: 25px;
          font-size: 0.9rem;
        }
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        span {
          line-height: 25px;
          font-size: 0.9rem;
        }
      }
      .social {
        flex: 1;
        span {
          margin-right: 8px;
          font-size: 0.9rem;
          font-family: limelight;
        }
      }
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
  .separation {
    margin: 10px 0;
  }

  .date {
    font-size: 0.8rem;
    float: right;
  }
`
