import React, { useContext, useEffect } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./style";
import { UserContext } from "../../contexts/UserProvider";
import { ModalContext } from "../../contexts/ModalProvider";
import { api } from "../../service/api";
import { useModalControls } from "../Modal";
import { formatFileds } from "../../utils";

const EditProfile: React.FC = () => {
  const { user, token } = useContext(UserContext);
  const { setIsOpen } = useContext(ModalContext);
  const { openModal } = useModalControls();

  const editProfileSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    cpf: yup.string().min(14),
    phone: yup.string().min(15),
    biography: yup.string(),
    birthDate: yup.string().min(10),
  });

  const { register, handleSubmit, setValue, resetField } = useForm({
    resolver: yupResolver(editProfileSchema),
  });

  useEffect(() => {
    const formFields = Object.keys(editProfileSchema.fields);
    const formatedData = user.birthDate.split("T")[0].split("-").reverse().join("/");
    const userData = { ...user, birthDate: formatedData };

    const userKeys = Object.keys(userData);
    const userValues = Object.values(userData);

    formFields.forEach((field) => setValue(field, userValues[userKeys.indexOf(field)]));

    return () => formFields.forEach((field) => resetField(field));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendForm = (data: FieldValues) => {
    api
      .patch("/users/profile", data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        openModal("editProfileSucess");
      })
      .catch(() => {
        openModal("actionError");
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <h4>Informações pessoais</h4>
      <Input label="Nome" placeholder={user.name} name="name" maxLength={120} register={register} />
      <Input
        label="Email"
        placeholder={user.email}
        name="email"
        maxLength={120}
        register={register}
      />
      <Input
        label="CPF"
        placeholder={user.cpf}
        name="cpf"
        register={register}
        onChange={(e) => formatFileds.cpf(e.target.value, e.target)}
      />
      <Input
        label="Celular"
        placeholder={user.phone}
        name="phone"
        register={register}
        onChange={(e) => formatFileds.phone(e.target.value, e.target)}
      />
      <Input
        label="Data de nascimento"
        placeholder={user.birthDate}
        name="birthDate"
        type="text"
        register={register}
        onChange={(e) => formatFileds.birthdate(e.target.value, e.target)}
      />
      <Input
        label="Descrição"
        placeholder={user.biography}
        name="biography"
        register={register}
        maxLength={300}
        type="textarea"
      />

      <StyledHorizontalDisplay>
        <ThemeButton variant="negative" onClick={() => setIsOpen(false)}>
          Cancelar
        </ThemeButton>
        <ThemeButton variant="primary" type="submit">
          Salvar alterações
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default EditProfile;
