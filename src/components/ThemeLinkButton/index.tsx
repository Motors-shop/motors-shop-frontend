import { FC, PropsWithChildren } from "react";

import { Btn } from "./style";
import { IButtonProps } from "./types";

const ThemeLinkButton: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  ...buttonProps
}) => {
  return <Btn {...buttonProps}>{children}</Btn>;
};

export default ThemeLinkButton;
