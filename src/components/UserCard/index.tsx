import { useNavigate } from "react-router-dom";
import ThemeButton from "../ThemeButton";
import { ThemeUserCard } from "./style";

const UserCard = () => {
  const navigate = useNavigate();

  return (
    <ThemeUserCard>
      <span>SL</span>
      <p>Samuel Leão</p>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's
      </span>
      <ThemeButton onClick={() => navigate("/samuel_leão/products")}>
        Ver todos anuncios
      </ThemeButton>
    </ThemeUserCard>
  );
};

export default UserCard;
