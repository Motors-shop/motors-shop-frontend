import React, { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./styles";
import { useModalControls } from "../Modal";

const VehicleRegister: React.FC = () => {
  const [sellType, setSellType] = useState("VENDA");
  const [type, setType] = useState("CARRO");
  const [gallery, setGallery] = useState([""]);
  const [cantSend, setCantSend] = useState(true);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(vehicleRegisterSchema) });

  const sendForm = (data: FieldValues) => {
    data.sellType = sellType;
    data.type = type;
    data.gallery = gallery;

    console.log(data);

    openModal("vehicleRegisterSucess");
  };

  const verifyInputs = () => {
    watch("capeImage") &&
    watch("description") &&
    watch("km") &&
    watch("price") &&
    watch("title") &&
    watch("year") &&
    gallery[0].length >= 1
      ? setCantSend(false)
      : setCantSend(true);
  };

  return (
    <StyledForm onChange={verifyInputs} onSubmit={handleSubmit(sendForm)}>
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

      <Input
        label="Título"
        placeholder="Digitar título"
        name="title"
        register={register}
        error={errors.title?.message as string}
      />

      <StyledHorizontalDisplay>
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
          type="number"
          register={register}
          error={errors.price?.message as string}
        />
      </StyledHorizontalDisplay>

      <Input
        label="Descrição"
        placeholder="Digitar descrição"
        name="description"
        type="textarea"
        register={register}
        error={errors.description?.message as string}
      />

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

      <ThemeButton
        disabled={gallery.length > maxGalleryImages}
        onClick={() => setGallery([...gallery, ""])}
        variant="primaryLight"
      >
        Adicionar Campo para imagem da galeria
      </ThemeButton>

      <StyledHorizontalDisplay>
        <ThemeButton variant="negative">Cancelar</ThemeButton>
        <ThemeButton disabled={cantSend} variant="primary" type="submit">
          Criar anúncio
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default VehicleRegister;
