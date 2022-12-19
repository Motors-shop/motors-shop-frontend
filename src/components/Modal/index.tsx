import React, { useContext, useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { FiX } from "react-icons/fi";

import { ModalContext } from "../../contexts/ModalProvider";

import useModalControls from "./hooks";
import { IModalProps } from "./types";
import {
  HeaderActions,
  ModalActions,
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./style";

const Modal: React.FC<React.PropsWithChildren<IModalProps>> = ({
  name,
  title,
  actions,
  children,
  closeable = true,
  closeOnEsc,
  closeOnOutsideClick,
  supressCloseableModalWarning,
}) => {
  const modalReference = useRef<HTMLDivElement>(null);
  const { isOpen, currentModalName } = useContext(ModalContext);
  const { closeModal } = useModalControls();

  useEffect(() => {
    if (
      !supressCloseableModalWarning &&
      !closeable &&
      (!actions || actions.length < 1)
    ) {
      throw new Error(
        `[Modal ${name}] A modal that is not closeable must have at least one action (preferably a closing action), since it can keep the user stuck in place if not handled correctly. If this behaviour is intentional, you can set \`supressCloseableModalWarning\` prop to true.`
      );
    }
    if (name !== currentModalName) return;

    function handleOutsideClick(e: MouseEvent) {
      if (
        e.target !== modalReference.current &&
        !modalReference.current?.contains(e.target as Node)
      ) {
        closeModal();
      }
    }

    function handleESCKey(e: KeyboardEvent) {
      if (isOpen && e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    }

    if (isOpen && closeOnOutsideClick && closeable) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    if (isOpen && closeOnEsc && closeable) {
      document.addEventListener("keydown", handleESCKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleESCKey);
    };
  }, [
    supressCloseableModalWarning,
    closeOnOutsideClick,
    closeOnEsc,
    closeable,
    actions,
    name,
    closeModal,
    isOpen,
    currentModalName,
  ]);

  if (!isOpen || name !== currentModalName) return <></>;
  return (
    <Portal>
      <ModalBackground>
        <ModalContainer ref={modalReference}>
          <ModalHeader>
            <h1>{title}</h1>
            <HeaderActions>
              {closeable && (
                <button title="Fechar" onClick={closeModal}>
                  <FiX size={16} />
                </button>
              )}
            </HeaderActions>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          {actions && <ModalActions>{actions}</ModalActions>}
        </ModalContainer>
      </ModalBackground>
    </Portal>
  );
};

export default Modal;
export { default as useModalControls } from "../Modal/hooks";
