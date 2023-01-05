import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

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

  return (
    <ProductCardContainer {...linkProps} draggable="false">
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
        <ProductPrice>
          {price.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </ProductPrice>
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
