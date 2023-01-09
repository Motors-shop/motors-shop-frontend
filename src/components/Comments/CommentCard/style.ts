import styled from "styled-components";

export const ThemeCard = styled.li`
  > div {
    color: var(--grey1);
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.65vh + 0.65vw + 0.25vmin);
    display: flex;

    > span {
      color: var(--grey3);
      font-family: var(--inter);
      font-weight: 400;
      font-size: calc(0.6vh + 0.6vh + 0.3vmin);
      position: relative;

      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: calc(1.1vh + 1.1vw);

      &::before {
        content: "";
        background-color: var(--grey4);
        position: absolute;
        left: calc(-0.7vh + -0.7vw);

        width: calc(0.2vh + 0.2vw);
        height: calc(0.2vh + 0.2vw);
        border-radius: 50%;
      }
    }
  }

  > p {
    color: var(--grey2);
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.6vh + 0.6vw + 0.12vmin);
    margin-top: calc(0.6vh + 0.6vw);
  }

  @media (max-width: 425px) {
    > div {
      font-size: calc(1.2vh + 1.2vw + 0.5vmin);

      > span {
        font-size: calc(0.8vh + 0.8vh + 0.5vmin);
        margin-left: calc(1.8vh + 1.8vw);

        &::before {
          left: calc(-1.2vh + -1.2vw);
          width: calc(0.35vh + 0.35vw);
          height: calc(0.35vh + 0.35vw);
        }
      }
    }

    > p {
      font-size: calc(1.2vh + 1.2vw + 0.5vmin);
      margin-top: calc(1vh + 1vw);
    }
  }
`;

export const ThemeCommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > button {
    position: relative;

    > svg {
      position: absolute;
    }
  }
`;
