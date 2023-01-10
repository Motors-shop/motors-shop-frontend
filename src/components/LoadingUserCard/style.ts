import styled from "styled-components";

export const StyledContainer = styled.div`
  border-radius: calc(0.2vh + 0.2vw);
  padding: calc(1.65vh + 1.65vw) calc(2vh + 2vw);

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: calc(1.35vh + 1.4vw);

  background-color: var(--grey8);

  .horizontal {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .description,
  .userImage,
  .userName,
  .tag {
    background-color: var(--grey6);
  }

  .description {
    width: 100%;
  }

  .userName,
  .tag {
    height: 25px;
  }

  .description {
    height: 75px;
  }

  .userImage {
    height: 104px;
    width: 104px;
    border-radius: 50%;
  }

  .userName {
    width: 160px;
  }

  .tag {
    width: 50px;
  }
`;
