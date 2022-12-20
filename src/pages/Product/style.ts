import styled from "styled-components";

export const Container = styled.main`
  min-width: 100%;
  min-height: 83vh;
  background: linear-gradient(var(--brand1) 60vh, var(--grey8) 60vh 100%);
  padding: calc(1.8vh + 1.8vw) calc(8.3vh + 8.3vw) calc(3.6vh + 3.6vw) calc(8.3vh + 8.3vw);

  > section {
    max-width: 60%;
    min-width: 60%;
  }
  > aside {
    max-width: 40%;
    min-width: 40%;
  }

  @media (max-width: 425px) {
    padding: calc(3vh + 3vw) calc(2vh + 2vw);

    > section {
      max-width: 100%;
      min-width: 100%;
    }
    > aside {
      max-width: 100%;
      min-width: 100%;
    }
  }
`;
