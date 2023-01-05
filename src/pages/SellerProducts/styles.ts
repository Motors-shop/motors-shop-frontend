import styled from "styled-components";

export const StyledBody = styled.main`
  background-color: var(--grey8);
  padding-top: 250px;
  padding-bottom: 1px;
  min-height: 55vh;
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
      width: 90%;
    }
  }
`;

export const StyledPurpleBackground = styled.div`
  background-color: var(--brand1);
  width: 100%;
  height: 35vh;
`;
