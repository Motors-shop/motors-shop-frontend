import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import ThemeButton from "../../components/ThemeButton";
import { StyledHorizontalDisplay, StyledMessageSucess, ThemeRegister } from "./style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Modal, { useModalControls } from "../../components/Modal";
import { api } from "../../service/api";
import ThemeLinkButton from "../../components/ThemeLinkButton";
import { formatFileds } from "../../utils";
import FeedbackMenssage from "../../components/FeedbackMenssage";

const Register = () => {
  const [userType, setUserType] = useState("COMPRADOR");

  const { openModal } = useModalControls();

  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Senha não corresponde"),
    email: yup.string().required(),
    cpf: yup.string().required().min(14),
    phone: yup.string().required().min(15),
    birthDate: yup.string().required().min(10),
    biography: yup.string().required(),

    cep: yup.string().required().min(9),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendForm = (data: FieldValues) => {
    const { name, password, email, cpf, phone, birthDate, biography, confirmPassword, ...address } =
      data;

    const dataForAPI = {
      name,
      password,
      email,
      cpf,
      phone,
      birthDate: birthDate.split("/").reverse().join("-"),
      biography,
      accountType: userType,
      address: address,
    };

    api
      .post("/users", dataForAPI)
      .then((_) => {
        openModal("registerSucess");
        Object.keys(schema.fields).forEach((field) => resetField(field));
        setUserType("COMPRADOR");
      })
      .catch(() => openModal("registerError"));
  };

  return (
    <>
      <Modal name="registerSucess" title="Sucesso!">
        <StyledMessageSucess>
          <h4>Sua conta foi criada com sucesso!</h4>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </StyledMessageSucess>
        <ThemeLinkButton variant="primary" to="/login">
          Ir para o login
        </ThemeLinkButton>
      </Modal>

      <FeedbackMenssage
        name="registerError"
        title="Ops! algo deu errado"
        menssage="Ocorreu um erro ao tentar criar um novo usuário, por favor tente novamente mais tarde"
      />

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
            onChange={(e) => formatFileds.cpf(e.target.value, e.target)}
            required
          />

          <Input
            register={register}
            error={errors.phone && "Campo obrigatório"}
            placeholder="(DDD) 90000-0000"
            label="Celular"
            name="phone"
            onChange={(e) => formatFileds.phone(e.target.value, e.target)}
            required
          />

          <Input
            register={register}
            error={errors.birthDate && "Campo obrigatório"}
            placeholder="00/00/0000"
            label="Data de Nascimeto"
            name="birthDate"
            onChange={(e) => formatFileds.birthdate(e.target.value, e.target)}
            required
          />

          <Input
            register={register}
            error={errors.biography && "Campo obrigatório"}
            placeholder="Digitar Descrição"
            type="textarea"
            label="Descrição"
            name="biography"
            maxLength={300}
            required
          />

          <h4>Informações de endereço</h4>

          <Input
            register={register}
            error={errors.cep && "Campo obrigatório"}
            placeholder="00000-000"
            label="CEP"
            name="cep"
            onChange={(e) => formatFileds.cep(e.target.value, e.target)}
            required
          />

          <StyledHorizontalDisplay>
            <Input
              register={register}
              error={errors.state && "Campo obrigatório"}
              placeholder="Digitar Estado"
              label="Estado"
              name="state"
              maxLength={2}
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
              variant={userType === "VENDEDOR" ? "primary" : "normal"}
              outlined={userType !== "VENDEDOR"}
              onClick={() => setUserType("VENDEDOR")}
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
