import styled, { css } from "styled-components";
import { IThemeUserCardProps } from "./types";

export const ThemeUserCard = styled.div<IThemeUserCardProps>`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  padding: calc(1.65vh + 1.65vw) calc(2vh + 2vw);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(1.35vh + 1.4vw);

  > span {
    color: var(--grey2);
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.65vh + 0.65vw + 0.1vmin);
    text-align: center;
  }

  > span:nth-child(1) {
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border-radius: 50%;
    padding: calc(1.2vh + 1.2vw);

    font-weight: 700;
    font-size: calc(1.4vh + 1.4vw + 0.1vmin);
  }

  > p {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.9vh + 0.9vw + 0.1vmin);

    display: flex;
    flex-direction: row;
    gap: calc(0.5vh + 0.5vw);

    > span {
      font-family: var(--inter);
      font-weight: 500;
      font-size: calc(0.6vh + 0.6vw + 0.2vmin);
      color: var(--brand1);
      background-color: var(--brand4);
      padding: calc(0.3vh + 0.3vw) calc(0.4vh + 0.4vw);
      border-radius: calc(0.2vh + 0.2vw);
    }
  }

  > button {
    font-size: calc(0.6vh + 0.6vw + 0.2vmin);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(0.5vh + 0.5vw) calc(1.05vh + 1.05vw);
    gap: calc(0.2vh + 0.2vw);
  }

  ${({ type }) =>
    type === "profile" &&
    css`
      align-items: baseline;
      margin: 0 auto;
      gap: calc(1vh + 1vw);

      > span {
        text-align: start;
      }

      > button {
        margin-top: calc(0.5vh + 0.5vw);
      }
    `}

  @media (max-width: 425px) {
    padding: calc(3vh + 3vw) calc(2vh + 2vw);

    > span {
      font-size: calc(1.5vh + 1.5vw + 0.5vmin);
    }

    > span:nth-child(1) {
      padding: calc(1.8vh + 1.8vw);
      font-size: calc(2vh + 2vw + 0.6vmin);
    }

    > p {
      font-size: calc(1.7vh + 1.7vw + 0.7vmin);

      > span {
        font-size: calc(1.2vh + 1.2vw + 0.6vmin);
        padding: calc(0.4vh + 0.4vw) calc(0.6vh + 0.6vw);
      }
    }

    > button {
      font-size: calc(1.1vh + 1.1vw + 0.6vmin);
      padding: calc(1vh + 1vw) calc(1.45vh + 1.45vw);
    }

    ${({ type }) =>
      type === "profile" &&
      css`
        > span:nth-child(1) {
          padding: calc(2.8vh + 2.8vw);
          font-size: calc(3vh + 3vw + 1.6vmin);
        }
      `}
  }
`;
