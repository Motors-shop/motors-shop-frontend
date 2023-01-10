import styled from "styled-components";

export const Content = styled.div`
  max-width: 60%;
  min-width: 60%;

  > .capeImage {
    background-color: var(--grey10);
    padding: calc(1vh + 1vw) 0;
    border-radius: calc(0.2vh + 0.2vw);
    min-height: 31vh;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: calc(0.75vh + 0.75vw);

    > img {
      width: 60%;
      object-fit: contain;
    }
  }

  @media (max-width: 425px) {
    max-width: 100%;
    min-width: 100%;

    > .capeImage {
      padding: calc(6vh + 6vw) 0;

      > img {
        width: 80%;
        object-fit: contain;
      }
    }
  }
`;

export const ThemeDescription = styled.div`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  margin-top: calc(1.8vh + 1.8vw);
  padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);
  min-height: 26vh;

  > h3 {
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.9vh + 0.9vw + 0.1vmin);

    color: var(--grey1);
    margin-bottom: calc(1.5vh + 1.5vw);
  }

  > p {
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.7vh + 0.7vw + 0.1vmin);
    color: var(--grey2);
  }

  @media (max-width: 425px) {
    border-radius: calc(0.2vh + 0.2vw);
    margin-top: calc(1.8vh + 1.8vw);
    padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);

    > h3 {
      font-size: calc(1.5vh + 1.5vw + 1vmin);
      margin-bottom: calc(2vh + 2vw);
    }

    > p {
      font-size: calc(1.2vh + 1.2vw + 0.8vmin);
    }
  }
`;
