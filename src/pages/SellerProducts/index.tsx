import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import { StyledBody, StyledPurpleBackground, StyledTypeShowCase, StyledUserCard } from "./styles";
import { vehicleData } from "../../Data/vehicleData";
import ProductCard from "../../components/ProductCard";

const SellerProducts = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>
        <UserCard profile={isProfile} admin={isAdmin} />
      </StyledUserCard>

      <StyledBody>
        <h2>Carros</h2>
        <StyledTypeShowCase>
          {vehicleData.map((vehicle, index) => {
            if (vehicle.type === "CARRO") {
              return (
                <ProductCard
                  key={index}
                  coverImage={vehicle.capeImage}
                  description={vehicle.description}
                  owner={{ name: "Samuel" }}
                  price={vehicle.price}
                  title={vehicle.title}
                  isOwner={true}
                  to={`/product/${vehicle.id}`}
                  tags={[`${vehicle.km}`, `${vehicle.year}`]}
                  isPublished={vehicle.isPublished}
                />
              );
            }
          })}
        </StyledTypeShowCase>

        <h2>Motos</h2>
        <StyledTypeShowCase>
          {vehicleData.map((vehicle, index) => {
            if (vehicle.type === "MOTO") {
              return (
                <ProductCard
                  key={index}
                  coverImage={vehicle.capeImage}
                  description={vehicle.description}
                  owner={{ name: "Samuel" }}
                  price={vehicle.price}
                  title={vehicle.title}
                  isOwner={true}
                  to={`/product/${vehicle.id}`}
                  tags={[`${vehicle.km}`, `${vehicle.year}`]}
                  isPublished={vehicle.isPublished}
                />
              );
            }
          })}
        </StyledTypeShowCase>
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
