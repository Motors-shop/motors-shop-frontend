import { ButtonHTMLAttributes } from "react";

type ButtonVariants =
  | "normal"
  | "negative"
  | "primary"
  | "primaryLight"
  | "light"
  | "link"
  | "alert"
  | "sucess";

export interface IStyledButtonProps {
  variant?: ButtonVariants;
  large?: boolean;
  outlined?: boolean;
  extend?: boolean;
}

export type IButtonProps =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | IStyledButtonProps;
