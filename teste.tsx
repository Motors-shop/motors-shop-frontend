import React from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
    return isModalOpen ? <div>{children}</div> : <></>;
  };

  function open() {
    setIsModalOpen(true);
  }

  function close() {
    setIsModalOpen(false);
  }

  function toggle() {
    setIsModalOpen(!isModalOpen);
  }

  return {
    Modal,
    open,
    close,
    toggle,
  };
}
