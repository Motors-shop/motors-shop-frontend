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
import FeedbackMenssage from "../../components/FeedbackMenssage";
import { UserContext } from "../../contexts/UserProvider";

const SellerProducts = () => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [motorbikes, setMotorbikes] = useState<IProductData[]>([]);
  const [cars, setCars] = useState<IProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  const { user_id } = useParams();

  useEffect(() => {
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

      <FeedbackMenssage
        name="vehicleRegisterSucess"
        subtitle="Sucesso!"
        title="Seu anúncio foi criado com sucesso!"
        menssage="Agora você poderá ver negócios crescendo em grande escala"
      />
      <FeedbackMenssage
        name="vehicleRegisterError"
        subtitle="Error!"
        title="Ops! algo deu errado."
        menssage="Ocorreu um erro ao tentar cadastrar um novo veículo, por favor tente novamente mais tarde"
      />

      <Navbar />

      <StyledPurpleBackground />

      <StyledUserCard>{!loading && <UserCard profile data={userData} />}</StyledUserCard>

      <StyledBody>
        {user.id === user_id && (
          <VehicleSection title="Leilão" type="auction" data={cars} id="auction" />
        )}

        {!loading && cars.length > 0 && (
          <VehicleSection type="products" title="Carros" data={cars} id="cars" />
        )}

        {!loading && motorbikes.length > 0 && (
          <VehicleSection type="products" title="Motos" data={motorbikes} id="motorbikes" />
        )}
      </StyledBody>
      <Footer />
    </>
  );
};

export default SellerProducts;
