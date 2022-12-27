import styled from "styled-components";

export const ThemeNotFound = styled.main`
  min-height: 100vh;
  min-width: 100%;

  background-color: var(--grey6);

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: center;
    font-family: var(--lexend);
    font-size: calc(2vh + 2vw + 1vmin);
    transform: translateY(-50%);

    > h1 {
      color: var(--brand1);
    }

    > p {
      color: var(--brand2);
      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--brand3);
        position: absolute;
        top: 250%;
        left: 0;
        border-radius: 50%;
        filter: blur(10px) opacity(0.8);
      }
    }
  }

  @media (max-width: 425px) {
    > div {
      font-size: calc(3vh + 3vw + 1vmin);
    }
  }
`;
