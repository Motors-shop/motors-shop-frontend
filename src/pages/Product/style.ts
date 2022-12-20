import styled from "styled-components";

export const Container = styled.main`
  min-width: 100%;
  min-height: 83vh;
  background: linear-gradient(var(--brand1) 60vh, var(--grey8) 60vh 100%);
  padding: calc(1.8vh + 1.8vw) calc(8.3vh + 8.3vw) calc(3.6vh + 3.6vw) calc(8.3vh + 8.3vw);

  > div:nth-child(1) {
    display: flex;
    gap: calc(1.4vh + 1.4vw);
  }

  @media (max-width: 425px) {
    padding: calc(3vh + 3vw) calc(2vh + 2vw);
  }
`;
