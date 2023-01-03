import { useRef, useState } from "react";

import Modal from "./Modal";

import { IProductInfoProps } from "../types";
import { ThemeGallery } from "./style";

const Gallery = ({ data }: IProductInfoProps) => {
  const [modalImg, setModalImg] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { photos } = data;
  const modal = useRef();

  const openImage = (img: string) => {
    setModalImg(img);
    setOpenModal(true);
  };

  return (
    <ThemeGallery>
      <p>Fotos</p>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id} onClick={() => openImage(photo.url)}>
            <img src={photo.url} alt="Veículo anunciado" />
          </li>
        ))}
      </ul>
      {openModal && (
        <Modal
          reference={modal}
          openModal={openModal}
          setOpenModal={setOpenModal}
          url={modalImg}
        />
      )}
    </ThemeGallery>
  );
};

export default Gallery;
