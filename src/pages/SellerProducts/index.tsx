import { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import VehicleSection from "../../components/VehicleSection";
import VehicleRegister from "../../components/VehicleRegister";

import { api } from "../../service/api";
import { IProductData } from "../Home/types";
import {
  StyledBody,
  StyledPurpleBackground,
  StyledTypeShowCase,
  StyledUserCard,
} from "./styles";

const SellerProducts = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [data, setData] = useState<IProductData[]>([]);

  useEffect(() => {
    api
      .get("/vehicles")
      .then((res) => {
        const data: IProductData[] = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Modal name="vehicleRegister" title="Criar Anuncio">
        <VehicleRegister />
      </Modal>
      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>
        <UserCard profile={isProfile} admin={isAdmin} />
      </StyledUserCard>

      <StyledBody>
        {/* <h2>Carros</h2> */}
        <StyledTypeShowCase>
          <VehicleSection
            type="products"
            title="Carros"
            data={data.filter(({ type }) => type === "car")}
          />
          <VehicleSection
            type="products"
            title="Motos"
            data={data.filter(({ type }) => type === "motorbike")}
          />
        </StyledTypeShowCase>
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
