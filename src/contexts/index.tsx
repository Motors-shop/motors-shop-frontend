import { FC, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import CommentProvider from "./CommentProvider";

import ModalProvider from "./ModalProvider";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ModalProvider>
      <HelmetProvider>
        <CommentProvider>{children}</CommentProvider>
      </HelmetProvider>
    </ModalProvider>
  );
};

export default ContextProvider;
