import styled from "styled-components";

export const ThemeSection = styled.section`
  margin-bottom: 100px;
  max-width: 100%;

  > h2 {
    color: #000;
    font-family: var(--lexend);
    font-weight: 600;
    font-size: calc(1vh + 1vw + 0.3vmin);
    margin-bottom: calc(1.5vh + 1.5vw);
    margin-left: calc(3vh + 2.6vw);
  }

  > ul {
    display: flex;
    padding-top: calc(0.1vh + 0.1vw);
    gap: calc(2.2vh + 2.2vw);
    overflow-x: auto;
    cursor: grab;

    &:active {
      cursor: grabbing;
      user-select: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    > li {
      padding: 0 calc(0.1vh + 0.1vw);

      &:first-child {
        margin-left: calc(3vh + 2.6vw);
      }
      &:last-child {
        margin-right: calc(3vh + 2.6vw);
      }
    }
  }

  @media (max-width: 425px) {
    > h2 {
      font-size: calc(1.6vh + 1.6vw + 0.5vmin);
      margin-bottom: calc(3vh + 3vw);
      margin-left: calc(2vh + 2vw);
    }

    > ul {
      padding-top: calc(0.2vh + 0.2vw);

      > li {
        &:first-child {
          margin-left: calc(2vh + 2vw);
        }
        &:last-child {
          margin-right: calc(2vh + 2vw);
        }
      }
    }
  }
`;
