import ThemeButton from "../../../components/ThemeButton";
import { ThemeUserCard } from "./style";

const UserCard = () => {
  return (
    <ThemeUserCard>
      <span>SL</span>
      <p>Samuel Leão</p>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's
      </span>
      <ThemeButton>Ver todos anuncios</ThemeButton>
    </ThemeUserCard>
  );
};

export default UserCard;
