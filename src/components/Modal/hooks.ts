import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalProvider";

const useModalControls = () => {
  const { setIsOpen, setCurrentModalName } = useContext(ModalContext);

  function openModal(name: string) {
    setCurrentModalName(name);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { openModal, closeModal };
};

export default useModalControls;
