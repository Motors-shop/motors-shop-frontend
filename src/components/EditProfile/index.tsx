import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./style";
import { IEditProfile, IValidData } from "./type";
import { api } from "../../service/api";

const EditProfile: React.FC = () => {
  const [userData, setUserData] = useState<IEditProfile>({} as IEditProfile);

  useEffect(() => {
    api.get("").then((res) => {
      const { name, email, cpf, phone, birthDate, biography } = res.data;

      setUserData({ name, email, cpf, phone, biography, birthDate });
    });
  });

  const editProfileSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    cpf: yup.string(),
    phone: yup.string(),
    biography: yup.string(),
    birthDate: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editProfileSchema) });

  const sendForm = (data: FieldValues) => {
    const validData = {} as IValidData;
    const dataFields = Object.keys(data);

    dataFields.forEach((field) => {
      if (data[field] !== "") {
        validData[field] = data[field];
      }
    });
    console.log(validData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <h4>Informações pessoais</h4>
      <Input
        label="Nome"
        placeholder={userData.name}
        name="name"
        register={register}
        error={errors.name?.message as string}
      />
      <Input
        label="Email"
        placeholder={userData.email}
        name="email"
        register={register}
        error={errors.email?.message as string}
      />
      <Input
        label="CPF"
        placeholder={userData.cpf}
        name="cpf"
        register={register}
        error={errors.cpf?.message as string}
      />
      <Input
        label="Celular"
        placeholder={userData.phone}
        name="phone"
        register={register}
        error={errors.phone?.message as string}
      />
      <Input
        label="Data de nascimento"
        placeholder={userData.birthDate}
        name="birthDate"
        register={register}
        error={errors.birthDate?.message as string}
      />
      <Input
        label="Descrição"
        placeholder={userData.biography}
        name="biography"
        register={register}
        error={errors.biography?.message as string}
        type="textarea"
      />

      <StyledHorizontalDisplay>
        <ThemeButton variant="negative">Cancelar</ThemeButton>
        <ThemeButton variant="primary" type="submit">
          Salvar alterações
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default EditProfile;
