import { FC, PropsWithChildren, createContext, useState } from "react";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentModalName: string;
  setCurrentModalName: (name: string) => void;
}

const initialContextValue: IModalContext = {
  isOpen: false,
  setIsOpen: () => {},
  currentModalName: "",
  setCurrentModalName: () => {},
};

export const ModalContext = createContext(initialContextValue);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(initialContextValue.isOpen);
  const [currentModalName, setCurrentModalName] = useState(
    initialContextValue.currentModalName
  );

  return (
    <ModalContext.Provider
      value={{ isOpen, currentModalName, setIsOpen, setCurrentModalName }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
