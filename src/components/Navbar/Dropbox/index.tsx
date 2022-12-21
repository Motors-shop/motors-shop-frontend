import { useNavigate } from "react-router-dom";
import { ThemeDropBox } from "./style";

const Dropbox = () => {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <ThemeDropBox>
      <p>
        <span>SL</span> Samuel Leão
      </p>
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
