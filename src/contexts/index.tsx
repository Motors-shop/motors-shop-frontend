import { FC, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";

import ModalProvider from "./ModalProvider";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ModalProvider>
      <HelmetProvider>{children}</HelmetProvider>
    </ModalProvider>
  );
};

export default ContextProvider;
