import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./styles";
import { IProductIdProps } from "./type";
import { api } from "../../service/api";
import { useModalControls } from "../Modal";
import { formatFileds } from "../../utils";

const EditVehicle: React.FC<React.PropsWithChildren<IProductIdProps>> = ({
  vehicleData,
  token,
}) => {
  const [sellType, setSellType] = useState(vehicleData.sellType);
  const [type, setType] = useState(vehicleData.type);
  const [isPublish, setIsPublish] = useState<boolean>(vehicleData.isPublished);
  const [gallery, setGallery] = useState(vehicleData.photos.map((img) => img.url));
  const maxGalleryImages = 5;

  const { openModal } = useModalControls();

  const vehicleRegisterSchema = yup.object().shape({
    title: yup.string(),
    year: yup.string(),
    km: yup.string(),
    price: yup.string(),
    description: yup.string(),
    capeImage: yup.string(),
  });

  const { register, handleSubmit, setValue, resetField } = useForm({
    resolver: yupResolver(vehicleRegisterSchema),
  });

  useEffect(() => {
    const { photos, ...fields } = vehicleRegisterSchema.fields;
    const formFields = Object.keys(fields);

    const vehicleKeys = Object.keys(vehicleData);
    const vehicleValues = Object.values(vehicleData);

    formFields.forEach((field) => setValue(field, vehicleValues[vehicleKeys.indexOf(field)]));

    return () => formFields.forEach((field) => resetField(field));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendForm = (data: FieldValues) => {
    data.sellType = sellType;
    data.type = type;
    data.isPublished = isPublish;
    data.photos = gallery;
    data.price = +data.price.split(".").join("").split(",").join("");

    api
      .patch(`/vehicles/${vehicleData.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => openModal("vehicleUpdateSucess"))
      .catch(() => openModal("vehicleUpdateError"));
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <h4>Tipo de anuncio</h4>
      <StyledHorizontalDisplay>
        <ThemeButton
          variant={sellType === "VENDA" ? "primary" : "normal"}
          outlined={sellType !== "VENDA"}
          onClick={() => setSellType("VENDA")}
        >
          Venda
        </ThemeButton>
        <ThemeButton
          variant={sellType === "LEILAO" ? "primary" : "normal"}
          outlined={sellType !== "LEILAO"}
          onClick={() => setSellType("LEILAO")}
        >
          Leilão
        </ThemeButton>
      </StyledHorizontalDisplay>

      <h4>Informações do veículo</h4>
      <Input label="Título" name="title" maxLength={150} register={register} />

      <StyledHorizontalDisplay>
        <Input
          label="Ano"
          name="year"
          maxLength={4}
          onChange={(e) => formatFileds.year(e.target.value, e.target)}
          register={register}
        />

        <Input label="Quilometragem" name="km" type="number" register={register} />

        <Input
          label="Preço"
          name="price"
          onChange={(e) => formatFileds.price(e.target.value, e.target)}
          register={register}
        />
      </StyledHorizontalDisplay>

      <Input
        label="Descrição"
        name="description"
        type="textarea"
        maxLength={500}
        register={register}
      />

      <h4>Tipo de Veículo</h4>
      <StyledHorizontalDisplay>
        <ThemeButton
          variant={type === "CARRO" ? "primary" : "normal"}
          outlined={type !== "CARRO"}
          onClick={() => setType("CARRO")}
        >
          Carro
        </ThemeButton>
        <ThemeButton
          variant={type === "MOTO" ? "primary" : "normal"}
          outlined={type !== "MOTO"}
          onClick={() => setType("MOTO")}
        >
          Moto
        </ThemeButton>
      </StyledHorizontalDisplay>

      <h4>Publicado</h4>
      <StyledHorizontalDisplay>
        <ThemeButton
          variant={isPublish ? "primary" : "normal"}
          outlined={!isPublish}
          onClick={() => setIsPublish(true)}
        >
          Sim
        </ThemeButton>
        <ThemeButton
          variant={!isPublish ? "primary" : "normal"}
          outlined={isPublish}
          onClick={() => setIsPublish(false)}
        >
          Não
        </ThemeButton>
      </StyledHorizontalDisplay>

      <Input label="Imagem de capa" name="capeImage" maxLength={200} register={register} />

      {gallery.map((_, index) => (
        <Input
          label={`${index + 1}º Imagem da Galeria`}
          value={gallery[index]}
          name={`galleryImage${index + 1}`}
          maxLength={200}
          register={() => {}}
          key={index}
          onChange={(event) => {
            const galleryToUpdate = [...gallery];
            galleryToUpdate[index] = event.target.value;
            setGallery(galleryToUpdate);
          }}
        />
      ))}

      <ThemeButton
        disabled={gallery.length > maxGalleryImages}
        onClick={() => setGallery([...gallery, ""])}
        variant="primaryLight"
      >
        Adicionar Campo para imagem da galeria
      </ThemeButton>

      <StyledHorizontalDisplay>
        <ThemeButton variant="negative" onClick={() => openModal(`delete-${vehicleData.id}`)}>
          Excluir anúncio
        </ThemeButton>
        <ThemeButton variant="primary" type="submit">
          Salvar alterações
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default EditVehicle;
