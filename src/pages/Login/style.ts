import styled from "styled-components";

export const ThemeLogin = styled.main`
  min-height: 90vh;
  background-color: var(--grey8);

  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    background-color: var(--grey10);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(2vh + 2vw) calc(2.2vh + 2.2vw);

    display: flex;
    flex-direction: column;
    gap: calc(1.1vh + 1.1vw);

    > h2 {
      font-family: var(--lexend);
      font-weight: 500;
      font-size: calc(1vh + 1vw + 0.2vmin);
      color: #000;
    }

    span {
      font-family: var(--inter);
      color: var(--grey2);
      font-size: calc(0.6vh + 0.6vw + 0.2vmin);
    }

    > span {
      text-align: center;
      font-weight: 400;
    }

    > div > span {
      display: block;
      text-align: right;
      margin-top: calc(0.7vh + 0.7vw);
      font-weight: 500;
      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    > form {
      padding: calc(3vh + 3vw) calc(2.2vh + 2.2vw);
      gap: calc(2vh + 2vw);
      width: 90%;
      margin-top: 9vh;

      > h2 {
        font-size: calc(1.7vh + 1.7vw + 0.5vmin);
      }

      span {
        font-size: calc(1.1vh + 1.1vw + 0.6vmin);
      }

      > div > input,
      > div > div {
        > p {
          margin-bottom: calc(0.8vh + 0.8vw);
        }
        > input {
          padding: calc(1.1vh + 1.1vw) calc(0.8vh + 0.8vw);
        }
      }

      > div > span {
        margin-top: calc(1vh + 1vw);
      }
    }
  }
`;
