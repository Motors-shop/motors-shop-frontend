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
import FeedbackMenssage from "../../components/FeedbackMenssage";

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

    api.get(`/users/${user_id}`).then((res) => {
      const data: IUserData = res.data;
      const vehicles = data.vehicles.map((vehicle) => ({
        ...vehicle,
        owner: data,
      }));

      setUserData(data);

      setCars(vehicles.filter(({ type }) => type === "CARRO"));
      setMotorbikes(vehicles.filter(({ type }) => type === "MOTO"));

      setLoading(false);
    });

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);

  return (
    <>
      <Modal name="vehicleRegister" title="Criar Anuncio">
        <VehicleRegister />
      </Modal>

      <Modal name="vehicleRegisterSucess" title="Sucesso!">
        <FeedbackMenssage
          title="Seu anúncio foi criado com sucesso!"
          menssage="Agora você poderá ver negócios crescendo em grande escala"
        />
      </Modal>

      {isAdmin && <Modal name="editProfile" title="Editar Perfil"></Modal>}
      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>
        {!loading && <UserCard profile admin={isAdmin} data={userData} />}
      </StyledUserCard>

      <StyledBody>
        {isAdmin && (
          <VehicleSection
            title="Leilão"
            type="auction"
            data={cars}
            id="auction"
          />
        )}

        {!loading && cars.length > 0 && (
          <VehicleSection
            type="products"
            title="Carros"
            data={cars}
            id="cars"
          />
        )}

        {!loading && motorbikes.length > 0 && (
          <VehicleSection
            type="products"
            title="Motos"
            data={motorbikes}
            id="motorbikes"
          />
        )}
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
