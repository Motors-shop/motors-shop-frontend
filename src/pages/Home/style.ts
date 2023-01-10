import styled from "styled-components";

export const Contaier = styled.main`
  min-height: 83vh;
  min-width: 100%;

  > div {
    min-height: 71vh;
    max-height: 71vh;
    padding: 9vh calc(15vh + 15vw) 0 calc(15vh + 15vw);
    background-color: var(--brand2);

    margin: 0 auto;
    margin-bottom: calc(4vh + 4vw);
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(1.5vh + 1.5vw);

    > p {
      color: var(--grey10);
      font-family: var(--lexend);
      font-weight: 700;
      font-size: calc(1.7vh + 1.7vw + 0.1vmin);
    }

    > span {
      color: var(--grey9);
      font-family: var(--inter);
      font-weight: 400;
      font-size: calc(0.45vh + 0.5vw + 0.45vmin);
    }

    > div {
      display: flex;
      justify-content: center;
      gap: calc(0.9vh + 0.9vw);
      margin-top: calc(0.5vh + 0.5vw);
      padding: 0 calc(15vh + 15vw);

      > button {
        min-width: 90%;
      }
    }
  }

  > #auction > ul > div > li {
    max-width: 43%;
    min-width: 43%;
  }

  @media (max-width: 425px) {
    min-height: 83vh;
    min-width: 100%;

    > div {
      max-width: 100%;
      gap: calc(2vh + 2vw);
      padding: 9vh calc(2vh + 2vw) 0 calc(2vh + 2vw);
      margin: 0;
      margin-bottom: calc(3.5vh + 3.5vw);

      > p {
        font-size: calc(2.5vh + 2.5vw + 0.6vmin);
      }

      > span {
        font-size: calc(1vh + 1vw + 1vmin);
      }

      > div {
        min-width: 100%;
        gap: calc(1.9vh + 1.9vw);
        flex-direction: column;
        padding: 0;
      }
    }
  }
`;
