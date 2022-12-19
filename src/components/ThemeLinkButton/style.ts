import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { IStyledButtonProps } from "./types";

export const Btn = styled(Link)<IStyledButtonProps>`
  font-size: 0.9rem;
  font-family: var(--inter), var(--lexend);
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: 4px;
  color: currentColor;

  padding: 10px 16px;

  cursor: pointer;
  transition: 0.2s ease background-color, 0.2s ease color;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:disabled {
    background-color: var(--grey5);
    color: var(--whiteFixed);
    cursor: default;

    &:hover {
      background-color: var(--grey5);
      color: var(--whiteFixed);
    }
  }

  ${({ large }) =>
    large &&
    css`
      font-size: 1rem;

      padding: 12px 18px;
    `}

  ${({ extend }) =>
    extend &&
    css`
      width: 100%;
    `}

  ${({ variant, outlined }) => {
    switch (variant) {
      default:
      case "normal": {
        return css`
          background-color: var(--grey0);
          color: var(--whiteFixed);

          &:hover {
            background-color: var(--grey1);
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--grey0);
            outline: 1.5px solid var(--grey0);

            &:hover {
              background-color: var(--grey1);
              color: var(--grey10);
              outline-color: var(--grey1);
            }
          `}
        `;
      }

      case "negative": {
        return css`
          background-color: var(--grey6);
          color: var(--grey2);

          &:hover {
            background-color: var(--grey5);
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--grey0);
            outline: 1.5px solid var(--grey4);

            &:hover {
              background-color: var(--grey1);
              color: var(--grey10);
              outline-color: var(--grey1);
            }
          `}
        `;
      }

      case "primary": {
        return css`
          background-color: var(--brand1);
          color: var(--whiteFixed);

          &:hover {
            background-color: var(--brand2);
          }

          &:disabled {
            background-color: var(--brand3);
            color: var(--brand4);

            &:hover {
              background-color: var(--brand3);
              color: var(--brand4);
            }
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--brand1);
            outline: 1.5px solid var(--brand1);

            &:hover {
              background-color: var(--brand4);
              color: var(--brand1);
              outline-color: var(--brand1);
            }

            &:disabled {
              background-color: transparent;
              color: var(--brand3);
              outline-color: var(--brand3);

              &:hover {
                background-color: transparent;
                color: var(--brand3);
              }
            }
          `}
        `;
      }

      case "primaryLight": {
        return css`
          background-color: var(--brand4);
          color: var(--brand1);

          &:hover {
            background-color: var(--brand2);
            color: var(--whiteFixed);
          }
        `;
      }

      case "light": {
        return css`
          background-color: var(--grey10);
          color: var(--grey1);

          &:hover {
            background-color: var(--grey9);
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--grey10);
            outline: 1.5px solid var(--grey10);

            &:hover {
              background-color: var(--grey10);
              color: var(--grey1);
              outline-color: var(--grey10);
            }
          `}
        `;
      }

      case "link": {
        return css`
          background-color: transparent;
          color: var(--grey0);

          &:hover {
            background-color: var(--grey8);
          }
        `;
      }

      case "alert": {
        return css`
          background-color: var(--alert3);
          color: var(--alert1);

          &:hover {
            background-color: var(--alert2);
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--alert1);
            outline: 1.5px solid var(--alert1);

            &:hover {
              background-color: var(--alert2);
              color: var(--alert1);
              outline-color: var(--alert1);
            }
          `}
        `;
      }

      case "sucess": {
        return css`
          background-color: var(--sucess3);
          color: var(--sucess1);

          &:hover {
            background-color: var(--sucess2);
          }

          ${outlined &&
          css`
            background-color: transparent;
            color: var(--sucess1);
            outline: 1.5px solid var(--sucess1);

            &:hover {
              background-color: var(--sucess2);
              color: var(--sucess1);
              outline-color: var(--sucess1);
            }
          `}
        `;
      }
    }
  }}
`;
