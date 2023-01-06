import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import EditVehicle from "../EditVehicle";
import Modal, { useModalControls } from "../Modal";

import ThemeButton from "../ThemeButton";
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
  ...linkProps
}) => {
  const { user } = useContext(UserContext);
  const { openModal } = useModalControls();

  return (
    <>
      <Modal name="editVehicle" title="Editar anúncio">
        <EditVehicle />
      </Modal>

      <ProductCardContainer {...linkProps} draggable="false">
        <CoverContainer>
          <img src={coverImage} alt={`${title} product`} draggable="false" />
          {isOwner && (
            <OwnerBadge isPublished={isPublished}>
              {isPublished ? "Ativo" : "Inativo"}
            </OwnerBadge>
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
          <ProductPrice>
            {price.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </ProductPrice>
        </ProductFooter>
        {user.id === owner.id && (
          <StyledAdminButtons>
            <ThemeButton
              variant="normal"
              outlined={true}
              onClick={() => openModal("editVehicle")}
            >
              Editar
            </ThemeButton>
            <ThemeButton variant="normal" outlined={true}>
              Ver como
            </ThemeButton>
          </StyledAdminButtons>
        )}
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
