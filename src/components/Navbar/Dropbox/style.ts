import styled from "styled-components";

export const ThemeDropBox = styled.div`
  position: relative;

  &:hover ul {
    height: max-content;
  }

  > ul {
    position: absolute;
    top: 6vh;
    left: -10%;
    overflow: hidden;
    transition: height 0.4s;

    width: 140%;
    height: 0;
    background-color: var(--grey9);
    border-radius: calc(0.2vh + 0.2vw);
    box-shadow: 0 calc(0.2vh + 0.2vw) calc(1.5vh + 1.5vw) calc(-0.4vh + -0.4vw) var(--grey5);

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
        padding: calc(1.4vh + 1.4vw) calc(3vh + 2.6vw) calc(1.4vh + 1.4vw) 0;
        font-size: calc(1.1vh + 1.1vw + 0.5vmin);
      }
    }
  }
`;
