import React, { useContext, useEffect, useState } from "react";
import { FiChevronRight, FiClock } from "react-icons/fi";
import { UserContext } from "../../contexts/UserProvider";

import ThemeButton from "../ThemeButton";
import ThemeLinkButton from "../ThemeLinkButton";
import UserChip from "../UserChip";

import {
  ContentContainer,
  CoverContainer,
  Content,
  ProductAuctionCardContainer,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  ProductTitle,
  TagsList,
  TimeBadge,
} from "./style";
import { IProductAuctionProps } from "./types";

const ProductAuctionCard: React.FC<IProductAuctionProps> = ({
  coverImage,
  title,
  description,
  owner,
  tags,
  price,
  dueDate,
  ...linkProps
}) => {
  const { user } = useContext(UserContext);
  const [nowTime, setNowTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [nowTime]);

  return (
    <ProductAuctionCardContainer>
      <CoverContainer>
        <img src={coverImage} alt={`${title} product in auction`} />
        <ContentContainer>
          <TimeBadge>
            <FiClock />
            <span>
              {new Intl.DateTimeFormat("pt-BR", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              }).format(dueDate.getTime() - nowTime.getTime())}
            </span>
          </TimeBadge>
          <Content>
            <ProductTitle>{title}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <UserChip
              name={owner.name}
              avatar={owner.avatar}
              whiteText
              user={owner.id === user.id ? true : false}
            />
            <ProductFooter>
              {tags && (
                <TagsList>
                  {tags.map((tag, i) => (
                    <li key={i}>
                      <ThemeButton variant="primaryLight">{tag}</ThemeButton>
                    </li>
                  ))}
                </TagsList>
              )}
              <ProductPrice>
                {price.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </ProductPrice>
            </ProductFooter>
          </Content>
        </ContentContainer>
      </CoverContainer>
      <ThemeLinkButton extend large variant="primary" {...linkProps}>
        Acessar página do leilão <FiChevronRight />
      </ThemeLinkButton>
    </ProductAuctionCardContainer>
  );
};

export default ProductAuctionCard;
