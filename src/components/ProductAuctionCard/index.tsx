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
  const [formattingPrice, setFormattingPrice] = useState<string>(String(price));

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(new Date());
    }, 1000);

    setFormattingPrice(formattingPrice.slice(0, 16).replace(/[^\d]/g, ""));
    setFormattingPrice(formattingPrice.replace(/(\d{1,2})$/, ",$1"));
    setFormattingPrice(formattingPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <ProductPrice>R$ {formattingPrice}</ProductPrice>
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
