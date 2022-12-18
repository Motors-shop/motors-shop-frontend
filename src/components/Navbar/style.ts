import styled from "styled-components";
import { IThemeProps } from "./types";

export const ThemeNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(3vh + 2.6vw);
  position: relative;

  background-color: var(--grey10);
  border-bottom: calc(0.1vh + 0.1vw) solid var(--grey6);

  width: 100%;
  min-height: 10vh;
  max-height: 10vh;

  > img {
    height: calc(1.8vh + 1vw);
  }

  > nav {
    display: flex;
    background-color: var(--grey10);

    > ul {
      display: flex;
      align-items: center;
      height: 10vh;
      border-right: calc(0.1vh + 0.1vw) solid var(--grey6);
      margin-right: calc(2vh + 2vw);

      > li {
        font-family: var(--inter);
        font-weight: 600;
        font-size: calc(0.7vh + 0.7vw + 0.1vmin);

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
      height: 10vh;
      display: flex;
      align-items: center;
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
      top: 10vh;
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
            border-bottom: none;
          }
        }
      }

      > div {
        height: max-content;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;
