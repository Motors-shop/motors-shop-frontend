import styled from "styled-components";

export const Contaier = styled.main`
  min-height: 83vh;
  min-width: 100%;
  background: linear-gradient(var(--brand1) 50vh, var(--grey8) 50vh 100%);
  padding: calc(1.8vh + 1.8vw) calc(8.3vh + 8.3vw) calc(3.6vh + 3.6vw) calc(8.3vh + 8.3vw);

  @media (max-width: 425px) {
    padding: calc(3vh + 3vw) calc(2vh + 2vw);
  }
`;
