import styled from "styled-components";

export const StyledBody = styled.main`
  background-color: var(--grey8);
  padding-top: 250px;
  padding-bottom: 1px;
  min-height: 55vh;

  @media (max-width: 425px) {
    padding-top: 450px;
  }

  > #auction > ul > div > li {
    max-width: 43%;
    min-width: 43%;
  }
`;

export const StyledTypeShowCase = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 50px;
`;

export const StyledUserCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 75%;
    position: absolute;
  }

  @media (max-width: 425px) {
    > div {
      margin-top: 200px;
      width: 90%;
    }
  }
`;

export const StyledPurpleBackground = styled.div`
  background-color: var(--brand1);
  width: 100%;
  height: 35vh;
`;

export const StyledMenssageCreateFirstProduct = styled.div`
  border-radius: calc(0.2vh + 0.2vw);
  padding: calc(1.65vh + 1.65vw) calc(2vh + 2vw);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(1.35vh + 1.4vw);

  > p {
    font-size: 32px;
  }

  > button {
    font-size: 32px;
  }
`;
