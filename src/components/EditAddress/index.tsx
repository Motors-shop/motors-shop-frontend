import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./style";
import { IEditAddress, IValidData } from "./type";
import { api } from "../../service/api";

const EditAddress: React.FC = () => {
  const [addressData, setAddressData] = useState<IEditAddress>(
    {} as IEditAddress
  );

  useEffect(() => {
    api.get("").then((res) => {
      const { cep, state, city, street, complement, number } = res.data.address;

      setAddressData({ cep, state, city, street, number, complement });
    });
  });

  const editAddressSchema = yup.object().shape({
    cep: yup.string(),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editAddressSchema) });

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
      <h4>Informações de endereço</h4>
      <Input
        label="CEP"
        placeholder={addressData.cep}
        name="cep"
        register={register}
        error={errors.cep?.message as string}
      />

      <StyledHorizontalDisplay>
        <Input
          label="Estado"
          placeholder={addressData.state}
          name="state"
          register={register}
          error={errors.state?.message as string}
        />
        <Input
          label="Cidade"
          placeholder={addressData.city}
          name="city"
          register={register}
          error={errors.city?.message as string}
        />
      </StyledHorizontalDisplay>

      <Input
        label="Rua"
        placeholder={addressData.street}
        name="street"
        register={register}
        error={errors.street?.message as string}
      />

      <StyledHorizontalDisplay>
        <Input
          label="Número"
          placeholder={addressData.number}
          name="number"
          register={register}
          error={errors.number?.message as string}
        />
        <Input
          label="Complemento"
          placeholder={addressData.complement}
          name="complement"
          register={register}
          error={errors.complement?.message as string}
        />
      </StyledHorizontalDisplay>

      <StyledHorizontalDisplay>
        <ThemeButton variant="negative">Cancelar</ThemeButton>
        <ThemeButton variant="primary" type="submit">
          Salvar alterações
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default EditAddress;
