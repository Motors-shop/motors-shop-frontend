import styled from "styled-components";

export const ContainerComment = styled.section`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  margin-top: calc(1.8vh + 1.8vw);
  padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);
  font-size: calc(0.65vh + 0.65vw + 0.25vmin);

  > div {
    display: flex;
    flex-direction: column;
    gap: calc(1.5vh + 1.5vw);

    > p {
      font-family: var(--inter);
      > span {
        background-color: var(--brand2);
        border-radius: 50%;
        color: var(--whiteFixed);
        padding: 0.6vw;
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: calc(2vh + 2vw);
      button {
        width: fit-content;
      }
    }

    > div {
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
  }

  @media (max-width: 425px) {
    font-size: calc(1.2vh + 1.2vw + 0.5vmin);
    div {
      > p {
        > span {
          padding: 1.5vw;
        }
      }
    }
    border-radius: calc(0.2vh + 0.2vw);
    margin-top: calc(1.8vh + 1.8vw);
    padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);
  }

  @media screen and (min-width: 426px) {
    > div {
      > form {
        justify-content: flex-end;
        > button {
          position: absolute;
          align-self: flex-end;
          margin: calc(0.5vh + 0.5vw);
        }
      }
      
      > div {
        gap: 0.8vw;
        font-size: calc(0.5vh + 0.4vw + 0.5vmin);
        > span {
          padding: 0.2vw 0.6vw;
        }
      }
    }
  }
`;
