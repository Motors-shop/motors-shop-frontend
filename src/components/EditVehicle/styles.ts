import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  height: 700px;
  overflow-y: scroll;

  > div:last-child {
    margin-bottom: 35px;
  }

  ::-webkit-scrollbar {
    width: 4px;
    left: -100px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--grey6);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--brand3);
    border-radius: 10px;
  }
`;

export const StyledHorizontalDisplay = styled.div`
  display: flex;
  gap: 10px;

  > button {
    width: 50%;
  }
`;
