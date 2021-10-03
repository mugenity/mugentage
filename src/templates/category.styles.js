import styled from "styled-components"

export const Container = styled.div`
  padding-top: 100px;
  background-color: #1a1007e6;
  .title {
    font-size: 1.5rem;
    text-align: center;
    padding: 60px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    h3 {
      color: orange;
      position: relative;
      overflow: hidden;

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
      span {
        color: white;
      }
    }
  }

  .wrapper {
    display: flex;
    padding: 100px 80px;

    .left_box {
      flex: 3;
    }
  }
`
