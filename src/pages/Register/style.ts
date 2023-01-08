import styled from "styled-components";

export const ThemeRegister = styled.main`
  min-height: 90vh;
  background-color: var(--grey8);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14vh 0 10vh 0;

  > form {
    width: 400px;
    background-color: var(--grey10);
    border-radius: calc(0.2vh + 0.2vw);
    padding: calc(2vh + 2vw) calc(2.2vh + 2.2vw);

    display: flex;
    flex-direction: column;
    gap: calc(1.1vh + 1.1vw);

    > span {
      display: flex;
      flex-wrap: wrap;

      p {
        display: inline;
        font-size: 24px;
        position: relative;
        color: var(--grey2);
        bottom: 3px;
        margin-left: 4px;
        text-transform: capitalize;
        font-style: italic;
        font-weight: bold;
      }
    }

    > div > button {
      width: 50%;
    }
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

export const StyledMessageSucess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 30px auto;

  > h4 {
    font-family: var(--lexend);
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);
  }

  > p {
    font-family: var(--inter);
    font-weight: 400;
    font-size: 16px;
    color: var(--grey2);
  }
`;
