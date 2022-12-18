import styled from "styled-components";

export const ThemeFooter = styled.footer`
  min-height: 10vh;
  max-height: 10vh;
  width: 100%;
  padding: 0 calc(2.7vh + 2.7vw);

  background-color: var(--grey0);
  color: var(--whiteFixed);

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: calc(1.8vh + 1vw);
  }

  > span {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 400;
    font-size: calc(0.6vh + 0.6vw + 0.12vmin);
  }

  > button {
    padding: calc(0.45vh + 0.45vw) calc(0.55vh + 0.55vw);
    background-color: var(--grey1);
    color: var(--whiteFixed);

    cursor: pointer;
    border: none;
    border-radius: calc(0.2vh + 0.2vw);
    font-size: calc(0.7vh + 0.8vw + 0.2vmin);
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: calc(1.2vh + 1.2vw) 0;
    gap: calc(1.5vh + 1.5vw);
    max-height: 15vh;
  }
`;
