import { FC, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";

import CommentProvider from "./CommentProvider";
import ModalProvider from "./ModalProvider";
import UserProvider from "./UserProvider";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <HelmetProvider>
          <CommentProvider>{children}</CommentProvider>
        </HelmetProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default ContextProvider;
