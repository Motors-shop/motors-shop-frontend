import styled from "styled-components";

export const ThemeDropBox = styled.div`
  position: relative;

  > p {
    color: var(--grey2);
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.65vh + 0.65vw + 0.25vmin);

    > span {
      color: var(--whiteFixed);
      background-color: var(--brand2);
      border-radius: 50%;
      padding: calc(0.3vh + 0.3vw);
      margin-right: calc(0.1vh + 0.1vw);

      font-family: var(--inter);
      font-weight: 700;
      font-size: calc(0.6vh + 0.6vw + 0.2vmin);
    }
  }

  &:hover ul {
    height: max-content;
  }

  > ul {
    position: absolute;
    top: 9vh;
    left: -10%;
    overflow: hidden;
    transition: height 0.4s;

    width: 140%;
    height: 0;
    background-color: var(--grey9);
    border-radius: calc(0.2vh + 0.2vw);
    box-shadow: 0 calc(0.3vh + 0.3vw) calc(2vh + 2vw) calc(-0.5vh + -0.5vw) var(--grey5);

    > li {
      padding: calc(1vh + 1vw);
      color: var(--grey2);
      font-family: var(--inter);
      font-weight: 400;
      font-size: calc(0.7vh + 0.7vw + 0.1vmin);

      &:hover {
        cursor: pointer;
        background-color: var(--grey7);
      }
    }
  }

  @media (max-width: 425px) {
    > p {
      font-size: calc(1.2vh + 1.2vw + 0.5vmin);
      padding: calc(2vh + 2vw) calc(3vh + 2.6vw);

      > span {
        padding: calc(0.5vh + 0.5vw);
        margin-right: calc(0.2vh + 0.2vw);

        font-size: calc(1vh + 1vw + 0.4vmin);
      }
    }

    &:hover ul {
      height: max-content;
    }

    > ul {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: max-content;

      border-radius: 0;
      box-shadow: none;
      background-color: transparent;

      > li {
        padding: calc(1.4vh + 1.4vw) calc(3vh + 2.6vw);
        font-size: calc(1.1vh + 1.1vw + 0.5vmin);
      }
    }
  }
`;
