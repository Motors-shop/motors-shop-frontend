import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { api } from "../../service/api";
import { StyledHorizontalDisplay } from "../EditAddress/style";
import EditVehicle from "../EditVehicle";
import FeedbackMenssage from "../FeedbackMenssage";
import Modal, { useModalControls } from "../Modal";

import ThemeButton from "../ThemeButton";
import ThemeLinkButton from "../ThemeLinkButton";
import UserChip from "../UserChip";

import {
  CoverContainer,
  OwnerBadge,
  ProductCardContainer,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  ProductTitle,
  StyledAdminButtons,
  TagList,
} from "./style";
import { IProductCardProps } from "./types";

const ProductCard: React.FC<IProductCardProps> = ({
  coverImage,
  title,
  description,
  price,
  tags,
  owner,
  isOwner,
  isPublished = false,
  vehicleData,
  ...linkProps
}) => {
  const { user, token } = useContext(UserContext);
  const { openModal, closeModal } = useModalControls();

  const removeVehicle = () => {
    api
      .delete(`/vehicles/${vehicleData.id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => openModal("vehicleDeleteSucess"))
      .catch((_) => openModal("vehicleDeleteError"));
  };
  vehicleData.price = String(vehicleData.price).slice(0, 16).replace(/[^\d]/g, "");
  vehicleData.price = String(vehicleData.price).replace(/(\d{1,2})$/, ",$1");
  vehicleData.price = String(vehicleData.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <div>
      <Modal name={`edit-${vehicleData.id}`} title="Editar anúncio">
        <EditVehicle vehicleData={vehicleData} token={token} />
      </Modal>

      <FeedbackMenssage
        name={`delete-${vehicleData.id}`}
        title="Excluir anúncio"
        subtitle="Tem certeza que deseja remover este anúncio?"
        menssage="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
        "
      >
        <StyledHorizontalDisplay style={{ justifyContent: "flex-end" }}>
          <ThemeButton variant="negative" onClick={() => closeModal()}>
            Cancelar
          </ThemeButton>
          <ThemeButton variant="alert" onClick={removeVehicle}>
            Sim, excluir anúncio
          </ThemeButton>
        </StyledHorizontalDisplay>
      </FeedbackMenssage>

      <ProductCardContainer
        {...linkProps}
        draggable="false"
        style={{ pointerEvents: !isPublished ? "none" : "unset" }}
      >
        <CoverContainer>
          <img src={coverImage} alt={`${title} product`} draggable="false" />
          {isOwner && (
            <OwnerBadge isPublished={isPublished}>{isPublished ? "Ativo" : "Inativo"}</OwnerBadge>
          )}
        </CoverContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <UserChip
          name={owner.name}
          avatar={owner.avatar}
          user={user.id === owner.id ? true : false}
        />
        <ProductFooter>
          {tags && (
            <TagList>
              {tags.map((tag, i) => (
                <li key={i}>
                  <ThemeButton variant="primaryLight">{tag}</ThemeButton>
                </li>
              ))}
            </TagList>
          )}
          <ProductPrice>R$ {vehicleData.price}</ProductPrice>
        </ProductFooter>
      </ProductCardContainer>
      {user.id === owner.id && isOwner && (
        <StyledAdminButtons>
          <ThemeButton
            onClick={() => openModal(`edit-${vehicleData.id}`)}
            variant="normal"
            outlined={true}
          >
            Editar
          </ThemeButton>
          <ThemeLinkButton variant="normal" outlined={true} to={linkProps.to}>
            Ver como
          </ThemeLinkButton>
        </StyledAdminButtons>
      )}
    </div>
  );
};

export default ProductCard;
