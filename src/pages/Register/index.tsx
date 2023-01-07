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
    complement: yup.string().notRequired(),
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
    console.log(errors);
    // enviar dados para API e devolver uma resposta

    openModal("registerSucess");
  };

  console.log(errors);

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

          <span>
            ATENÇÃO - campos marcados com <p>*</p> são obrigatórios
          </span>

          <h4>Informações Pessoais</h4>
          <Input
            register={register}
            error={errors.name && "Campo obrigatório"}
            placeholder="Ex. Samuel Leão"
            label="Nome"
            name="name"
            required
          />

          <Input
            register={register}
            error={errors.email && "Campo obrigatório"}
            placeholder="Ex. samuel@kenzie.com.br"
            type="email"
            label="Email"
            name="email"
            required
          />

          <Input
            register={register}
            error={errors.cpf && "Campo obrigatório"}
            placeholder="000.000.000-00"
            label="CPF"
            name="cpf"
            required
          />

          <Input
            register={register}
            error={errors.phone && "Campo obrigatório"}
            placeholder="(DDD) 90000-0000"
            label="Celular"
            name="phone"
            required
          />

          <Input
            register={register}
            error={errors.birthDate && "Campo obrigatório"}
            placeholder="00/00/0000"
            label="Data de Nascimeto"
            name="birthDate"
            required
          />

          <Input
            register={register}
            error={errors.biography && "Campo obrigatório"}
            placeholder="Digitar Descrição"
            type="textarea"
            label="Descrição"
            name="biography"
            required
          />

          <h4>Informações de endereço</h4>

          <Input
            register={register}
            error={errors.cep && "Campo obrigatório"}
            placeholder="00000-000"
            label="CEP"
            name="cep"
            required
          />

          <StyledHorizontalDisplay>
            <Input
              register={register}
              error={errors.state && "Campo obrigatório"}
              placeholder="Digitar Estado"
              label="Estado"
              name="state"
              required
            />

            <Input
              register={register}
              error={errors.city && "Campo obrigatório"}
              placeholder="Digitar Cidade"
              label="Cidade"
              name="city"
              required
            />
          </StyledHorizontalDisplay>

          <Input
            register={register}
            error={errors.street && "Campo obrigatório"}
            placeholder="Digitar rua"
            label="Rua"
            name="street"
            required
          />

          <StyledHorizontalDisplay>
            <Input
              register={register}
              error={errors.number && "Campo obrigatório"}
              placeholder="Digitar número"
              label="Número"
              name="number"
              required
            />

            <Input
              register={register}
              error={errors.complement && "Campo obrigatório"}
              placeholder="Ex. apto 309"
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
            error={errors.password && "Campo obrigatório"}
            placeholder="Digitar senha"
            type="password"
            label="Senha"
            name="password"
            required
          />

          <Input
            register={register}
            error={errors.confirmPassword && "Campo obrigatório"}
            placeholder="Digitar senha"
            type="password"
            label="Confirmar Senha"
            name="confirmPassword"
            required
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
