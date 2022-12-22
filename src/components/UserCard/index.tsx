import { useNavigate } from "react-router-dom";
import ThemeButton from "../ThemeButton";
import { ThemeUserCard } from "./style";
import { IUSerCardProps } from "./types";

const UserCard = ({ admin, product, profile }: IUSerCardProps) => {
  const navigate = useNavigate();

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
      <span>{getNameInitials("Samuel Leão")}</span>
      <p>Samuel Leão {profile && <span>Anunciante</span>}</p>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s
      </span>
      {product && (
        <ThemeButton onClick={() => navigate("/samuel_leão/products")}>
          Ver todos anuncios
        </ThemeButton>
      )}
      {profile && admin && (
        <ThemeButton outlined variant="primary">
          Criar anuncio
        </ThemeButton>
      )}
    </ThemeUserCard>
  );
};

export default UserCard;
