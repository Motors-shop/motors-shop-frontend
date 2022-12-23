import styled from "styled-components";
import { IThemeProps } from "./types";

export const ThemeNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(3vh + 2.6vw);
  position: fixed;
  top: 0;
  z-index: 999;

  background-color: var(--grey10);
  border-bottom: calc(0.1vh + 0.1vw) solid var(--grey6);

  width: 100%;
  min-height: 9vh;
  max-height: 9vh;

  > img {
    height: calc(1.8vh + 1vw);
  }

  > nav {
    display: flex;
    background-color: var(--grey10);

    > ul {
      display: flex;
      align-items: center;
      height: 7vh;
      border-right: calc(0.1vh + 0.1vw) solid var(--grey6);
      margin-right: calc(2vh + 2vw);

      > li {
        font-family: var(--inter);
        font-weight: 600;
        font-size: calc(0.7vh + 0.7vw + 0.1vmin);
        border-bottom: calc(0.03vh + 0.03vw) solid transparent;

        margin-right: calc(2vh + 2vw);
        color: var(--grey2);
        transition: color 0.3s;

        &:hover {
          cursor: pointer;
          color: var(--brand2);
          border-bottom: calc(0.03vh + 0.03vw) solid var(--brand2);
        }
      }
    }

    > div {
      height: 7vh;
      display: flex;
      align-items: center;
      gap: calc(1vh + 1vw);

      > button {
        font-size: calc(0.6vh + 0.6vw + 0.2vmin);
        border-radius: calc(0.2vh + 0.2vw);
        padding: calc(0.5vh + 0.5vw) calc(1.05vh + 1.05vw);
        gap: calc(0.2vh + 0.2vw);
      }

      > button:nth-child(1):hover {
        color: var(--brand1);
        background-color: var(--grey10);
      }
    }
  }

  @media (max-width: 425px) {
    > img {
      height: calc(2.2vh + 1.4vw);
    }

    > svg {
      height: calc(2vh + 2vw);
      width: calc(2vh + 2vw);
    }

    > nav {
      position: absolute;
      top: 7vh;
      left: 0;

      width: 100%;
      height: ${({ menu }: IThemeProps) => (menu ? "max-content" : 0)};
      overflow: hidden;

      flex-direction: column;
      box-shadow: 0 calc(0.3vh + 0.3vw) calc(2vh + 2vw) calc(-0.5vh + -0.5vw) var(--grey5);
      z-index: 999;

      > ul {
        align-items: flex-start;
        flex-direction: column;

        border-right: none;
        border-bottom: calc(0.1vh + 0.1vw) solid var(--grey6);
        height: max-content;

        padding: calc(2vh + 2vw) calc(3vh + 2.6vw);
        padding-bottom: 0;
        margin: 0;

        > li {
          font-size: calc(1.2vh + 1.2vw + 0.5vmin);
          margin-bottom: calc(2vh + 2vw);
          width: 100%;

          &:hover {
            cursor: pointer;
            color: var(--brand2);
            border-bottom: calc(0.03vh + 0.03vw) solid transparent;
          }
        }
      }

      > div {
        height: max-content;
        flex-direction: column;
        align-items: flex-start;

        padding: calc(2vh + 2vw) calc(3vh + 2.6vw);

        > button {
          width: 100%;
          font-size: calc(1.1vh + 1.1vw + 0.6vmin);
          padding: calc(1vh + 1vw) calc(1.45vh + 1.45vw);
        }

        > button:nth-child(1) {
          justify-content: flex-start;
          padding-left: 0;

          &:hover {
            color: var(--brand1);
            background-color: var(--grey10);
          }
        }
      }
    }
  }
`;
