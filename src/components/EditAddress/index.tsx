import React, { useContext, useEffect } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./style";
import { ModalContext } from "../../contexts/ModalProvider";
import { UserContext } from "../../contexts/UserProvider";
import { api } from "../../service/api";
import { useModalControls } from "../Modal";
import { formatFileds } from "../../utils";

const EditAddress: React.FC = () => {
  const { user, token } = useContext(UserContext);
  const { address } = user;
  const { setIsOpen } = useContext(ModalContext);
  const { openModal } = useModalControls();

  const editAddressSchema = yup.object().shape({
    cep: yup.string().min(9),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
  });

  const { register, handleSubmit, setValue, resetField } = useForm({
    resolver: yupResolver(editAddressSchema),
  });

  useEffect(() => {
    const formFields = Object.keys(editAddressSchema.fields);

    const addressKeys = Object.keys(address);
    const addressValues = Object.values(address);

    formFields.forEach((field) => setValue(field, addressValues[addressKeys.indexOf(field)]));

    return () => formFields.forEach((field) => resetField(field));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendForm = (data: FieldValues) => {
    api
      .patch("/users/address", data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        openModal("editAddressSucess");
      })
      .catch(() => {
        openModal("actionError");
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <h4>Informações de endereço</h4>
      <Input
        label="CEP"
        placeholder={address.cep}
        name="cep"
        register={register}
        onChange={(e) => formatFileds.cep(e.target.value, e.target)}
      />

      <StyledHorizontalDisplay>
        <Input
          label="Estado"
          placeholder={address.state}
          name="state"
          maxLength={2}
          register={register}
        />
        <Input
          label="Cidade"
          placeholder={address.city}
          name="city"
          maxLength={30}
          register={register}
        />
      </StyledHorizontalDisplay>

      <Input
        label="Rua"
        placeholder={address.street}
        name="street"
        maxLength={80}
        register={register}
      />

      <StyledHorizontalDisplay>
        <Input
          label="Número"
          placeholder={address.number}
          name="number"
          maxLength={5}
          register={register}
        />
        <Input
          label="Complemento"
          placeholder={address.complement}
          name="complement"
          maxLength={60}
          register={register}
        />
      </StyledHorizontalDisplay>

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

export default EditAddress;
