import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import VehicleSection from "../../components/VehicleSection";

import { api } from "../../service/api";
import { IProductData } from "../Home/types";
import {
  StyledBody,
  StyledMenssageCreateFirstProduct,
  StyledPurpleBackground,
  StyledUserCard,
} from "./styles";
import { useParams } from "react-router-dom";
import { IUserData } from "../../contexts/types";
import { UserContext } from "../../contexts/UserProvider";
import SellerProductsModals from "./SellerProductsModals";
import LoadingUserCard from "../../components/LoadingUserCard";
import ThemeButton from "../../components/ThemeButton";
import { useModalControls } from "../../components/Modal";

const SellerProducts = () => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [motorbikes, setMotorbikes] = useState<IProductData[]>([]);
  const [cars, setCars] = useState<IProductData[]>([]);
  const [auction, setAuction] = useState<IProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);
  const { openModal } = useModalControls();

  const { user_id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/users/${user_id}`).then((res) => {
      const data: IUserData = res.data;
      const vehicles = data.vehicles.map((vehicle) => ({
        ...vehicle,
        owner: data,
      }));

      setUserData(data);

      setCars(vehicles.filter(({ type, sellType }) => type === "CARRO" && sellType === "VENDA"));
      setMotorbikes(
        vehicles.filter(({ type, sellType }) => type === "MOTO" && sellType === "VENDA")
      );

      setAuction(vehicles.filter(({ sellType }) => sellType === "LEILÃO"));

      setLoading(false);
    });

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);

  return (
    <>
      <SellerProductsModals />

      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>
        {!loading ? <UserCard profile data={userData} /> : <LoadingUserCard />}
      </StyledUserCard>

      <StyledBody>
        {loading && <VehicleSection title="" type="products" data={[]} id="auction" />}

        {cars.length === 0 && motorbikes.length === 0 && user.id === userData.id && (
          <StyledMenssageCreateFirstProduct>
            <p>Você ainda não tem anúncio. Crie seu primeiro aqui!</p>
            <ThemeButton outlined variant="primary" onClick={() => openModal("vehicleRegister")}>
              Criar anúncio
            </ThemeButton>
          </StyledMenssageCreateFirstProduct>
        )}

        {user.id === user_id && (
          <VehicleSection title="Leilão" type="auction" data={auction} id="auction" />
        )}

        <VehicleSection type="products" title="Carros" data={cars} id="cars" />

        <VehicleSection type="products" title="Motos" data={motorbikes} id="motorbikes" />
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
