import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { Btn } from "../ThemeButton/style";
import { IOwnerBadge } from "./types";

export const ProductCardContainer = styled(Link)`
  max-width: 312px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  font-family: var(--inter);
  text-decoration: none;
  color: currentColor;
`;

export const OwnerBadge = styled.span<IOwnerBadge>`
  position: absolute;
  top: 12px;
  left: 12px;

  font-size: 0.8rem;
  font-family: var(--inter);
  font-weight: 500;
  line-height: 1.6rem;

  padding: 0 8px;

  background-color: var(--grey4);
  color: var(--whiteFixed);

  ${({ isPublished }) =>
    isPublished &&
    css`
      background-color: var(--brand1);
    `}
`;

export const CoverContainer = styled.figure`
  position: relative;
  width: 312px;
  height: 152px;

  background-color: var(--grey7);
  outline: 0px solid var(--brand1);

  display: flex;
  justify-content: center;

  transition: 0.04s ease outline-width;
  overflow: hidden;

  img {
    height: 100%;
    transition: transform 0.4s;
  }

  ${ProductCardContainer}:hover & {
    outline-width: 2px;
    img {
      transform: scale(1.2);
    }

    > ${OwnerBadge} {
      transition: opacity 0.4s;
      opacity: 0;
    }
  }
`;

export const ProductTitle = styled.h3`
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;

  overflow: hidden;
`;

export const ProductDescription = styled.p`
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1rem;
  text-overflow: ellipsis;

  overflow: hidden;
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const ProductPrice = styled.p`
  font-family: var(--lexend);
  font-weight: 500;

  margin-left: auto;
`;

export const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  ${Btn} {
    font-size: 0.8rem;
    padding: 8px 10px;
  }

  > li button:hover {
    background-color: var(--brand4);
    color: var(--brand1);
  }
`;
