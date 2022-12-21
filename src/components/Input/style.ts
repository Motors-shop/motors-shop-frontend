import styled from "styled-components";

export const ThemeInput = styled.div`
  > P {
    color: var(--grey1);
    font-family: var(--inter);
    font-weight: 500;
    font-size: calc(0.6vh + 0.6vw + 0.4vmin);
    margin-bottom: calc(0.3vh + 0.3vw);
  }

  > input,
  > textarea {
    border: calc(0.1vh + 0.1vw) var(--grey7) solid;
    background-color: var(--whiteFixed);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(0.4vh + 0.4vw) calc(0.5vh + 0.5vw);
    transition: background 0.3s, border 0.3s;
    width: 100%;
    display: flex;

    font-family: var(--inter);
    font-weight: 400;
    font-size: calc(0.6vh + 0.6vw + 0.5vmin);
    resize: none;

    &::placeholder {
      color: var(--grey3);
    }

    &:hover {
      background-color: var(--grey8);
      border-color: var(--grey8);
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: var(--brand3);
    }

    &:focus {
      background-color: var(--grey9);
      border-color: var(--brand1);
    }

    &:focus::placeholder {
      color: transparent;
    }

    &::-webkit-scrollbar {
      width: calc(0.4vh + 0.4vw);
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: calc(0.5vh + 0.5vw);

      &:hover {
        background-color: var(--brand1);
      }
    }
  }

  @media (max-width: 425px) {
    > P {
      font-size: calc(1vh + 1vw + 0.8vmin);
      margin-bottom: calc(0.5vh + 0.5vw);
    }

    > input,
    > textarea {
      border: calc(0.2vh + 0.2vw) var(--grey7) solid;
      padding: calc(0.7vh + 0.7vw) calc(0.8vh + 0.8vw);
      font-size: calc(1vh + 1vw + 0.8vmin);
    }
  }
`;
