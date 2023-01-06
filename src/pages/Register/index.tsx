import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import ThemeButton from "../../components/ThemeButton";
import { StyledHorizontalDisplay, ThemeRegister } from "./style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Modal, { useModalControls } from "../../components/Modal";

const Register = () => {
  if (!!localStorage.getItem("@motorsShop:token")) {
    window.location.href = "/";
  }

  const [userType, setUserType] = useState("COMPRADOR");
  const navigate = useNavigate();

  const { openModal } = useModalControls();

  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Senha não corresponde"),
    email: yup.string().required(),
    cpf: yup.string().required().max(11),
    phone: yup.string().required(),
    birthDate: yup.string().required(),
    biography: yup.string().required(),

    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendForm = (data: FieldValues) => {
    const { name, password, email, cpf, phone, birthDate, biography, ...adress } = data;

    const dataForAPI = {
      name,
      password,
      email,
      cpf,
      phone,
      birthDate,
      biography,
      accountType: userType,
      adress: adress,
    };

    console.log(dataForAPI);
    // enviar dados para API e devolver uma resposta

    openModal("registerSucess");
  };

  return (
    <>
      <Modal name="registerSucess" title="Sucesso!">
        <ThemeButton variant="primary" onClick={() => navigate("/login")}>
          Ir para o login
        </ThemeButton>
      </Modal>

      <Navbar />
      <ThemeRegister>
        <form onSubmit={handleSubmit(sendForm)}>
          <h2>Cadastro</h2>

          <h4>Informações Pessoais</h4>
          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Ex. Samuel Leão"
            type="text"
            label="Nome"
            name="name"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Ex. samuel@kenzie.com.br"
            type="text"
            label="Email"
            name="email"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="000.000.000-00"
            type="text"
            label="CPF"
            name="cpf"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="(DDD) 90000-0000"
            type="text"
            label="Celular"
            name="phone"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="(DDD) 90000-0000"
            type="text"
            label="Data de Nascimeto"
            name="birthDate"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Digitar Descrição"
            type="textarea"
            label="Descrição"
            name="biography"
          />

          <h4>Informações de endereço</h4>

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="00000-000"
            type="text"
            label="CEP"
            name="cep"
          />

          <StyledHorizontalDisplay>
            <Input
              register={register}
              error={errors.user?.message as string}
              placeholder="Digitar Estado"
              type="text"
              label="Estado"
              name="state"
            />

            <Input
              register={register}
              error={errors.user?.message as string}
              placeholder="Digitar Cidade"
              type="text"
              label="Cidade"
              name="city"
            />
          </StyledHorizontalDisplay>

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Digitar rua"
            type="text"
            label="Rua"
            name="street"
          />

          <StyledHorizontalDisplay>
            <Input
              register={register}
              error={errors.user?.message as string}
              placeholder="Digitar número"
              type="text"
              label="Número"
              name="number"
            />

            <Input
              register={register}
              error={errors.user?.message as string}
              placeholder="Ex. apto 309"
              type="text"
              label="Complemento"
              name="complement"
            />
          </StyledHorizontalDisplay>

          <h4>Tipo de conta</h4>

          <StyledHorizontalDisplay>
            <ThemeButton
              variant={userType === "COMPRADOR" ? "primary" : "normal"}
              outlined={userType !== "COMPRADOR"}
              onClick={() => setUserType("COMPRADOR")}
            >
              Comprador
            </ThemeButton>
            <ThemeButton
              variant={userType === "ANUNCIANTE" ? "primary" : "normal"}
              outlined={userType !== "ANUNCIANTE"}
              onClick={() => setUserType("ANUNCIANTE")}
            >
              Anunciante
            </ThemeButton>
          </StyledHorizontalDisplay>

          <Input
            register={register}
            error={errors.password?.message as string}
            placeholder="Digitar senha"
            type="password"
            label="Senha"
            name="password"
          />

          <Input
            register={register}
            error={errors.password?.message as string}
            placeholder="Digitar senha"
            type="password"
            label="Confirmar Senha"
            name="confirmPassword"
          />

          <ThemeButton variant="primary" type="submit">
            Finalizar Cadastro
          </ThemeButton>
        </form>
      </ThemeRegister>
      <Footer />
    </>
  );
};

export default Register;
