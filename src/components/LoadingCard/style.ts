import styled from "styled-components";

export const StyledContainer = styled.li`
  max-width: 312px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  .horizontal {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .horizontalBorder {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image,
  .title,
  .description,
  .userImage,
  .userName,
  .tag,
  .price {
    background-color: var(--grey6);
  }

  .image,
  .title,
  .description {
    width: 312px;
  }

  .image {
    height: 152px;
  }

  .title,
  .userName,
  .tag,
  .price {
    height: 22px;
  }

  .description {
    height: 44px;
  }

  .userImage {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  .userName {
    width: 160px;
  }

  .tag {
    width: 50px;
  }

  .price {
    width: 120px;
  }
`;
