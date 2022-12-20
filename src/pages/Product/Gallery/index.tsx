import { ThemeGallery } from "./style";

const Gallery = () => {
  const images = [
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
    "https://i.imgur.com/kOI65rU.png",
  ];

  return (
    <ThemeGallery>
      <p>Fotos</p>
      <ul>
        {images.map((img, index) => (
          <li key={index}>
            <img src={img} alt="car" />
          </li>
        ))}
      </ul>
    </ThemeGallery>
  );
};

export default Gallery;
