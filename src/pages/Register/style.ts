import styled from "styled-components";

export const ThemeRegister = styled.main`
  min-height: 90vh;
  background-color: var(--grey8);

  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    width: 400px;
    background-color: var(--grey10);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(2vh + 2vw) calc(2.2vh + 2.2vw);

    display: flex;
    flex-direction: column;
    gap: calc(1.1vh + 1.1vw);
  }

  @media (max-width: 425px) {
    > form {
      padding: calc(3vh + 3vw) calc(2.2vh + 2.2vw);
      gap: calc(2vh + 2vw);
      width: 90%;
      margin-top: 9vh;
    }
  }
`;

export const StyledHorizontalDisplay = styled.div`
  display: flex;
  gap: 10px;
`;
