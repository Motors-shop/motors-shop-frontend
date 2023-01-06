import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { StyledForm, StyledHorizontalDisplay } from "./styles";
import { api } from "../../service/api";
import { IProductData, IProductIdProps } from "./type";

const EditVehicle: React.FC<React.PropsWithChildren<IProductIdProps>> = ({
  vehicleId,
}) => {
  const [sellType, setSellType] = useState("VENDA");
  const [type, setType] = useState("CARRO");
  const [isPublish, setIsPublish] = useState<boolean>(false);
  const [gallery, setGallery] = useState([""]);
  const [cantSend, setCantSend] = useState<boolean>(true);
  const [vehicle, setVehicle] = useState<IProductData>({} as IProductData);
  const maxGalleryImages = 5;

  useEffect(() => {
    api.get("/vehicles/" + vehicleId).then((res) => {
      const data: IProductData = res.data;

      setIsPublish(data.isPublished);
      setSellType(data.sellType);
      setType(data.type);
      setGallery(data.photos.map((photo) => photo.url));
      setVehicle(data);
    });
  }, []);

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
      <Input
        label="Título"
        placeholder={vehicle.title}
        name="title"
        register={register}
        error={errors.title?.message as string}
      />

      <StyledHorizontalDisplay>
        <Input
          label="Ano"
          placeholder={vehicle.year}
          name="year"
          type="number"
          register={register}
          error={errors.year?.message as string}
        />

        <Input
          label="Quilometragem"
          placeholder={vehicle.km}
          name="km"
          type="number"
          register={register}
          error={errors.km?.message as string}
        />

        <Input
          label="Preço"
          placeholder={vehicle.price}
          name="price"
          type="number"
          register={register}
          error={errors.price?.message as string}
        />
      </StyledHorizontalDisplay>

      <Input
        label="Descrição"
        placeholder={vehicle.description}
        name="description"
        type="textarea"
        register={register}
        error={errors.description?.message as string}
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

      <Input
        label="Imagem de capa"
        placeholder={vehicle.capeImage}
        name="capeImage"
        register={register}
        error={errors.capeImage?.message as string}
      />

      {gallery.map((item, index) => {
        return (
          <Input
            label={`${index + 1}º Imagem da Galeria`}
            placeholder={vehicle.photos[index].url}
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
        <ThemeButton variant="negative">Excluir anúncio</ThemeButton>
        <ThemeButton disabled={cantSend} variant="primary" type="submit">
          Salvar alterações
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledForm>
  );
};

export default EditVehicle;
