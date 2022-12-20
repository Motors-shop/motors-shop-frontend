import styled from "styled-components";

export const ThemeGallery = styled.div`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  margin-bottom: calc(1.55vh + 1.55vw);
  padding: calc(1.65vh + 1.65vw) calc(2vh + 2vw);

  > p {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.9vh + 0.9vw + 0.1vmin);
    margin-bottom: calc(1.45vh + 1.45vw);
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: calc(0.65vh + 0.65vw);
    justify-content: space-between;

    > li {
      width: 30%;
      background-color: var(--grey7);
      border-radius: calc(0.2vh + 0.2vw);
      padding: calc(1.25vh + 1.2vw) calc(0.3vh + 0.3vw);
      border: calc(0.1vh + 0.1vw) solid transparent;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: border 0.3s;

      &:hover {
        border: calc(0.1vh + 0.1vw) solid var(--brand1);
        cursor: pointer;
      }

      > img {
        width: 80%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 425px) {
    > p {
      font-size: calc(1.7vh + 1.7vw + 0.5vmin);
    }

    > ul {
      gap: calc(1.3vh + 1.3vw);

      > li {
        padding: calc(1.8vh + 1.8vw) calc(0.3vh + 0.3vw);
      }
    }
  }
`;
