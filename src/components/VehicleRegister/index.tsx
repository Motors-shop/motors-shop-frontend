import React, { PropsWithChildren, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm } from "./styles";

const VehicleRegister: React.FC = () => {
  const [sellType, setSellType] = useState("VENDA");
  const [type, setType] = useState("CARRO");
  const [gallery, setGallery] = useState([""]);

  const vehicleRegisterSchema = yup.object().shape({
    title: yup.string().required("Campo requerido!"),

    year: yup
      .number()
      .required("Campo requerido!")
      .typeError("Deve preencher com um numero"),

    km: yup
      .number()
      .required("Campo requerido!")
      .typeError("Deve preencher com um numero"),

    price: yup.string().required("Campo requerido!"),

    description: yup.string().required("Campo requerido!"),

    capeImage: yup.string().required("Campo requerido!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(vehicleRegisterSchema) });

  const sendForm = (data: FieldValues) => {
    data.sellType = sellType;
    data.type = type;
    data.gallery = gallery;
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <div>
        <ThemeButton onClick={() => setSellType("VENDA")}>Venda</ThemeButton>
        <ThemeButton onClick={() => setSellType("LEILAO")}>Leilão</ThemeButton>
      </div>

      <Input
        label="Título"
        placeholder="Digitar título"
        name="title"
        register={register}
        error={errors.title?.message as string}
      />

      <div>
        <Input
          label="Ano"
          placeholder="Digitar ano"
          name="year"
          type="number"
          register={register}
          error={errors.year?.message as string}
        />

        <Input
          label="Quilometragem"
          placeholder="0"
          name="km"
          type="number"
          register={register}
          error={errors.km?.message as string}
        />

        <Input
          label="Preço"
          placeholder="Digitar preço"
          name="price"
          register={register}
          error={errors.price?.message as string}
        />
      </div>

      <Input
        label="Descrição"
        placeholder="Digitar descrição"
        name="description"
        type="textarea"
        register={register}
        error={errors.description?.message as string}
      />

      <div>
        <ThemeButton onClick={() => setType("CARRO")}>Carro</ThemeButton>
        <ThemeButton onClick={() => setType("MOTO")}>Moto</ThemeButton>
      </div>

      <Input
        label="Imagem de capa"
        placeholder="Inserir URL da imagem"
        name="capeImage"
        register={register}
        error={errors.capeImage?.message as string}
      />

      {gallery.map((item, index) => {
        return (
          <Input
            label={`${index + 1}º Imagem da Galeria`}
            placeholder="Inserir URL da imagem"
            name={`${index}galleryImage`}
            register={() => {}}
            key={index}
            onChange={(event) => {
              const galleryToUpdate = [...gallery];
              galleryToUpdate[index] = event.target.value;
              setGallery(galleryToUpdate);
            }}
          />
        );
      })}

      <ThemeButton onClick={() => setGallery([...gallery, ""])}>
        Adicionar Campo para imagem da galeria
      </ThemeButton>

      <div>
        <ThemeButton>Cancelar</ThemeButton>
        <ThemeButton type="submit">Criar anúncio</ThemeButton>
      </div>
    </StyledForm>
  );
};

export default VehicleRegister;
