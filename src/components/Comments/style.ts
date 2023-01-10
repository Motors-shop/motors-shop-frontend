import styled from "styled-components";

export const ContainerComments = styled.div`
  background-color: var(--grey10);
  border-radius: calc(0.2vh + 0.2vw);
  margin-top: calc(1.8vh + 1.8vw);
  padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);

  max-width: 60%;
  min-width: 60%;

  > h3 {
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(0.9vh + 0.9vw + 0.1vmin);

    color: var(--grey1);
    margin-bottom: calc(1.5vh + 1.5vw);
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: calc(2vh + 2vw);

    > p {
      color: var(--grey3);
    }
  }

  @media (max-width: 425px) {
    border-radius: calc(0.2vh + 0.2vw);
    margin-top: calc(1.8vh + 1.8vw);
    padding: calc(1.65vh + 1.65vw) calc(2.05vh + 2.05vw);

    max-width: 100%;
    min-width: 100%;

    > h3 {
      font-size: calc(1.5vh + 1.5vw + 1vmin);
      margin-bottom: calc(2vh + 2vw);
    }
  }
`;
