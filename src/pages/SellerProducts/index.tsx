import { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import VehicleSection from "../../components/VehicleSection";
import VehicleRegister from "../../components/VehicleRegister";

import { api } from "../../service/api";
import { IProductData } from "../Home/types";
import { StyledBody, StyledPurpleBackground, StyledTypeShowCase, StyledUserCard } from "./styles";
import { useParams } from "react-router-dom";
import { IUserData } from "../../contexts/types";

const SellerProducts = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [data, setData] = useState<IProductData[]>([]);

  const { user_id } = useParams();

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

    api.get(`/users/${user_id}`).then((res) => setUserData(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal name="vehicleRegister" title="Criar Anuncio">
        <VehicleRegister />
      </Modal>
      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>
        <UserCard profile admin={isAdmin} data={userData} />
      </StyledUserCard>

      <StyledBody>
        <VehicleSection
          type="products"
          title="Carros"
          data={data.filter(({ type }) => type === "CARRO")}
        />
        <VehicleSection
          type="products"
          title="Motos"
          data={data.filter(({ type }) => type === "MOTO")}
        />
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
