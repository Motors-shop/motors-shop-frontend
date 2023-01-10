import styled, { css } from "styled-components";
import { IAvatarContainer, IUserChipContainer } from "./types";

export const UserChipContainer = styled.div<IUserChipContainer>`
  display: flex;
  gap: 8px;

  align-items: center;

  font-size: 14px;
  font-family: var(--inter);
  font-weight: 500;

  color: var(--grey2);
  ${({ whiteText }) =>
    whiteText &&
    css`
      color: var(--whiteFixed);
    `};
`;

export const AvatarContainer = styled.figure<IAvatarContainer>`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;

  ${({ randomColor, user }) => css`
    background-color: var(${user ? "--brand2" : "--random" + randomColor});
  `}

  img {
    height: 100%;
  }
`;

export const Initials = styled.span`
  font-weight: 600;
  color: var(--whiteFixed);
`;

export const Name = styled.p`
  text-transform: capitalize;
`;
