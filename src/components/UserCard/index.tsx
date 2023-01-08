import ThemeButton from "../ThemeButton";
import ThemeLinkButton from "../ThemeLinkButton";
import { useModalControls } from "../Modal";

import { IUSerCardProps } from "./types";
import { ThemeUserCard } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserProvider";

const UserCard = ({ product, profile, data }: IUSerCardProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { id, name, biography } = data;
  const { openModal } = useModalControls();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.id === id) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getNameInitials(name: string): string {
    const splittedName = name.split(" ");

    return splittedName
      .map((word, i) => {
        if (i === 0 || i === splittedName.length - 1) {
          return word[0].toUpperCase();
        }

        return undefined;
      })
      .filter((w) => w)
      .join("");
  }

  return (
    <ThemeUserCard type={profile ? "profile" : "product"}>
      <span>{getNameInitials(name)}</span>
      <p>
        {name} {profile && <span>Anunciante</span>}
      </p>
      <span>{biography}</span>
      {product && <ThemeLinkButton to={`/${id}/products`}>Ver todos anuncios</ThemeLinkButton>}
      {profile && isAdmin && (
        <ThemeButton outlined variant="primary" onClick={() => openModal("vehicleRegister")}>
          Criar anuncio
        </ThemeButton>
      )}
    </ThemeUserCard>
  );
};

export default UserCard;
