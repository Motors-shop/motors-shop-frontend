import { useNavigate } from "react-router-dom";
import UserChip from "../../UserChip";
import { ThemeDropBox } from "./style";

const Dropbox = () => {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <ThemeDropBox>
      <UserChip name="Samuel Leão" user />

      <ul>
        <li>Editar Perfil</li>
        <li>Editar endereço</li>
        <li>Minhas Compras</li>
        <li onClick={exit}>Sair</li>
      </ul>
    </ThemeDropBox>
  );
};

export default Dropbox;
