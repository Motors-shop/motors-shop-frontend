import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

import { IGalleryModalProps } from "./types";
import { ThemeGalleryModal } from "./style";

const Modal = ({
  url,
  openModal,
  setOpenModal,
  reference,
}: IGalleryModalProps) => {
  useEffect(() => {
    const handleEvent = (e: MouseEvent) => {
      if (!reference.current?.contains(e.target)) {
        if (openModal) {
          setOpenModal(false);
        }
      }
    };
    window.addEventListener("mousedown", handleEvent);

    return () => window.removeEventListener("mousedown", handleEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeGalleryModal>
      <div ref={reference}>
        <h2>
          Imagem do veículo
          <span onClick={() => setOpenModal(false)}>
            <IoIosClose />
          </span>
        </h2>
        <div>
          <img src={url} alt="vehicle" />
        </div>
      </div>
    </ThemeGalleryModal>
  );
};

export default Modal;
