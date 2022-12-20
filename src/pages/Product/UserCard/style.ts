import styled from "styled-components";

export const ThemeUserCard = styled.div`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  padding: calc(1.65vh + 1.65vw) calc(2vh + 2vw);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(1.35vh + 1.4vw);

  > span {
    color: var(--grey2);
    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.65vh + 0.65vw + 0.1vmin);
    text-align: center;
  }

  > span:nth-child(1) {
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border-radius: 50%;
    padding: calc(1.2vh + 1.2vw);

    font-weight: 700;
    font-size: calc(1.4vh + 1.4vw + 0.1vmin);
  }

  > p {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.9vh + 0.9vw + 0.1vmin);

    display: flex;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: calc(3vh + 3vw) calc(2vh + 2vw);

    > span {
      font-size: calc(1.3vh + 1.3vw + 0.4vmin);
    }

    > span:nth-child(1) {
      padding: calc(1.8vh + 1.8vw);
      font-size: calc(2vh + 2vw + 0.6vmin);
    }

    > p {
      font-size: calc(1.7vh + 1.7vw + 0.7vmin);
    }
  }
`;
