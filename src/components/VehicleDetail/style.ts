import styled from "styled-components";

export const ThemeDetailCard = styled.div`
  padding: calc(2vh + 2vw);
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  min-width: 50%;
  min-height: 32vh;

  > h2 {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.75vh + 0.75vw + 0.24vmin);
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: calc(1.85vh + 1.85vw) 0 calc(0.9vh + 0.9vw) 0;

    > .tags {
      display: flex;
      gap: calc(0.55vh + 0.55vw);

      > span {
        font-family: var(--inter);
        font-weight: 500;
        font-size: calc(0.5vh + 0.5vw + 0.4vmin);
        color: var(--brand1);
        background-color: var(--brand4);
        padding: calc(0.2vh + 0.2vw) calc(0.35vh + 0.35vw);
        border-radius: calc(0.15vh + 0.15vw);
      }
    }

    > p {
      font-family: var(--lexend);
      font-weight: 500;
      font-size: calc(0.6vh + 0.6vw + 0.4vmin);
    }
  }

  > button {
    font-size: calc(0.6vh + 0.6vw + 0.2vmin);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(0.5vh + 0.5vw) calc(1.05vh + 1.05vw);
    gap: calc(0.2vh + 0.2vw);

    &:hover {
      background-color: var(--brand4);
      color: var(--brand1);
    }
  }

  @media (max-width: 425px) {
    padding: calc(2vh + 2vw);

    > h2 {
      font-size: calc(1.6vh + 1.6vw + 1vmin);
    }

    > div {
      margin: calc(1.85vh + 1.85vw) 0 calc(0.9vh + 0.9vw) 0;
      flex-direction: column;
      gap: calc(2vh + 2vw);

      > .tags {
        gap: calc(1.2vh + 1.2vw);

        > span {
          font-size: calc(1vh + 1vw + 0.8vmin);
          padding: calc(0.5vh + 0.5vw) calc(0.7vh + 0.7vw);
        }
      }

      > p {
        font-size: calc(1.3vh + 1.3vw + 1vmin);
        margin-bottom: calc(2vh + 2vw);
      }
    }

    > button {
      font-size: calc(1.1vh + 1.1vw + 0.6vmin);
      padding: calc(1vh + 1vw) calc(1.45vh + 1.45vw);
    }
  }
`;
