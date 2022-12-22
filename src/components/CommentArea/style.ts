import styled from "styled-components";

export const ContainerComment = styled.div`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  margin-top: calc(1.8vh + 1.8vw);
  padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);
  font-size: calc(0.65vh + 0.65vw + 0.25vmin);

  display: flex;
  flex-direction: column;
  gap: calc(1.5vh + 1.5vw);

  > form {
    display: flex;
    flex-direction: column;
    gap: calc(2vh + 2vw);

    > input {
      padding: calc(0.8vh + 0.8vw) calc(0.9vh + 0.9vw);
    }

    button {
      width: fit-content;
      font-size: calc(1.1vh + 1.1vw + 0.6vmin);
      padding: calc(1vh + 1vw) calc(1.45vh + 1.45vw);
    }
  }

  > .recommendations {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;

    > span {
      background-color: var(--grey7);
      border-radius: 24px;
      padding: 1vw 2vw;
      color: var(--grey3);

      :hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 425px) {
    font-size: calc(1.2vh + 1.2vw + 0.5vmin);
  }

  border-radius: calc(0.2vh + 0.2vw);
  margin-top: calc(1.8vh + 1.8vw);
  padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);

  @media screen and (min-width: 426px) {
    max-width: 60%;
    min-width: 60%;

    > form {
      justify-content: flex-end;
      > button {
        position: absolute;
        align-self: flex-end;
        margin: calc(0.5vh + 0.5vw);

        font-size: calc(0.6vh + 0.6vw + 0.2vmin);
        border-radius: calc(0.2vh + 0.2vw);
        padding: calc(0.5vh + 0.5vw) calc(1.05vh + 1.05vw);
        gap: calc(0.2vh + 0.2vw);
      }
    }

    > .recommendations {
      gap: 0.8vw;
      font-size: calc(0.5vh + 0.4vw + 0.5vmin);

      > span {
        padding: 0.2vw 0.6vw;
      }
    }
  }
`;
