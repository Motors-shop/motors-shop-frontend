import { FC, PropsWithChildren } from "react";
import ModalProvider from "./ModalProvider";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default ContextProvider;
