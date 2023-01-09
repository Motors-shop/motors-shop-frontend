import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 30px;

  > p {
    font-family: var(--inter);
    font-weight: 400;
    font-size: 16px;
    color: var(--grey2);
  }
`;
