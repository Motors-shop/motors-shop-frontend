import styled from "styled-components";

import { Btn as ButtonBtn } from "../ThemeButton/style";
import { Btn as LinkBtn } from "../ThemeLinkButton/style";

export const ProductAuctionCardContainer = styled.div`
  max-width: 735px;

  border-radius: 8px;
  overflow: hidden;

  ${LinkBtn} {
    border-radius: 0;

    justify-content: space-between;

    padding: 15px 36px;
  }
`;

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 326px;

  background-color: var(--grey7);

  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  padding: 24px 36px;

  background-color: rgba(0, 0, 0, 0.6);
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4));
  background-size: 100% 150%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 1s ease background-position;

  ${ProductAuctionCardContainer}:hover & {
    background-position: 150%;
  }
`;

export const TimeBadge = styled.div`
  background-color: var(--whiteFixed);
  color: var(--grey1);
  border-radius: 100px;

  font-family: var(--lexend);
  font-size: 1rem;
  font-weight: 500;

  width: fit-content;
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  span {
    padding-right: 8px;
  }
`;

export const Content = styled.div`
  margin-top: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductTitle = styled.h3`
  color: var(--whiteFixed);

  font-family: var(--lexend);
  font-weight: 600;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductDescription = styled.p`
  color: var(--grey5);

  display: -webkit-box;

  font-family: var(--inter);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  height: 1.1rem;

  overflow: hidden;

  transition: 0.3s ease height;

  ${ProductAuctionCardContainer}:hover & {
    -webkit-line-clamp: 4;
    height: calc(1.2rem * 4);
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  ${ButtonBtn} {
    font-size: 0.8rem;
    padding: 8px 10px;
  }
`;

export const ProductPrice = styled.p`
  font-family: var(--lexend);
  font-weight: 500;
  font-size: 1rem;

  color: var(--whiteFixed);
`;
