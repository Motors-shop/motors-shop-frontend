import styled from "styled-components";

export const ThemeGalleryModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--whiteFixed);
    border-radius: calc(0.4vh + 0.4vw);
    max-width: 40%;

    > h2 {
      font-family: var(--lexend);
      font-weight: 500;
      font-size: calc(0.8vh + 0.75vw + 0.2vmin);
      padding: calc(0.8vh + 0.8vw) calc(1.15vh + 1.15vw);

      display: flex;
      justify-content: space-between;
      align-items: center;

      > span {
        cursor: pointer;
        color: var(--grey4);
        font-size: calc(1.8vh + 1.8vw + 0.2vmin);
      }
    }

    > div {
      background-color: var(--grey7);
      border-radius: calc(0.2vh + 0.2vw);
      margin: calc(1.15vh + 1.15vw);
      margin-top: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: calc(1.85vh + 1.85vw) calc(3.7vh + 3.7vw);

      > img {
        width: 90%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 425px) {
    > div {
      max-width: 90%;

      > h2 {
        font-size: calc(1.3vh + 1.3vw + 0.6vmin);
        padding: calc(1.1vh + 1.1vw) calc(1.6vh + 1.6vw);

        > span {
          font-size: calc(2.6vh + 2.6vw + 0.8vmin);
        }
      }

      > div {
        margin: calc(1.6vh + 1.6vw);
        padding: calc(5.85vh + 5.85vw) calc(3.7vh + 3.7vw);

        > img {
          width: 90%;
        }
      }
    }
  }
`;
