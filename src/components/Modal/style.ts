import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.aside`
  width: 95vmin;
  max-width: 520px;
  margin-top: 80px;

  background-color: var(--whiteFixed);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.header`
  padding: 14px 24px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1rem;
    font-family: var(--lexend);
    font-weight: 500;
  }
`;

export const HeaderActions = styled.div`
  button {
    display: inline-flex;
    padding: 5px;

    background-color: transparent;
    color: var(--grey1);
    border: none;
    border-radius: 4px;

    cursor: pointer;
    transition: 0.2s ease background-color, 0.2s ease color;

    &:hover {
      background-color: var(--grey8);
    }
  }
`;

export const ModalContent = styled.div`
  padding: 0 24px 18px;
`;

export const ModalActions = styled.div`
  padding: 0 24px 18px;

  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
