import styled from "styled-components";

export const RecoveryForm = styled.form`
  background-color: var(--whiteFixed);
  border-radius: calc(0.2vh + 0.2vw);

  padding: calc(2vh + 2vw) calc(2.2vh + 2.2vw);

  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 95vmin;

  h2 {
    font-family: var(--lexend);
    font-weight: 500;
  }

  p {
    font-family: var(--inter);
    font-weight: 500;
  }
`;
