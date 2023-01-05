import { useContext, useEffect, useState } from "react";

import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import VehicleSection from "../../components/VehicleSection";
import VehicleRegister from "../../components/VehicleRegister";

import { api } from "../../service/api";
import { IProductData } from "../Home/types";
import { StyledBody, StyledPurpleBackground, StyledUserCard } from "./styles";
import { useParams } from "react-router-dom";
import { IUserData } from "../../contexts/types";
import { UserContext } from "../../contexts/UserProvider";

const SellerProducts = () => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [motorbikes, setMotorbikes] = useState<IProductData[]>([]);
  const [cars, setCars] = useState<IProductData[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { user } = useContext(UserContext);
  const { user_id } = useParams();

  useEffect(() => {
    if (user.id === user_id) {
      setIsAdmin(true);
    }

    api.get("/vehicles").then((res) => {
      const data: IProductData[] = res.data;
      setCars(data.filter(({ type }) => type === "CARRO"));
      setMotorbikes(data.filter(({ type }) => type === "MOTO"));
    });

    api.get(`/users/${user_id}`).then((res) => {
      setUserData(res.data);

      setLoading(false);
    });

    window.scrollTo(0, 0);
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
        {!loading && <UserCard profile admin={isAdmin} data={userData} />}
      </StyledUserCard>

      <StyledBody>
        {isAdmin && <VehicleSection title="Leilão" type="auction" data={cars} />}

        <VehicleSection type="products" title="Carros" data={cars} />
        <VehicleSection type="products" title="Motos" data={motorbikes} />
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
