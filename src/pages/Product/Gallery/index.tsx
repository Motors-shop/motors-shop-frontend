import { useRef, useState } from "react";
import Modal from "./Modal";
import { ThemeGallery } from "./style";

const Gallery = () => {
  const [modalImg, setModalImg] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modal = useRef();

  const images = [
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
  ];

  const openImage = (img: string) => {
    setModalImg(img);
    setOpenModal(true);
  };

  return (
    <ThemeGallery>
      <p>Fotos</p>
      <ul>
        {images.map((img, index) => (
          <li key={index} onClick={() => openImage(img)}>
            <img src={img} alt="vehicle" />
          </li>
        ))}
      </ul>
      {openModal && (
        <Modal reference={modal} openModal={openModal} setOpenModal={setOpenModal} url={modalImg} />
      )}
    </ThemeGallery>
  );
};

export default Gallery;
