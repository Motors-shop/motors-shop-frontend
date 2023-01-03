import { ThemeNav } from "./style";
import logo from "../../assets/motors_shop_logo_color.svg";
import Dropbox from "./Dropbox";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const token = localStorage.getItem("@motorsShop:token");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 425) {
      setMobile(true);
    }

    const checkMenu = () => {
      if (window.innerWidth <= 425) {
        setMobile(true);
      }
      if (window.innerWidth > 425) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", checkMenu);

    return () => window.removeEventListener("resize", checkMenu);
  }, []);

  return (
    <ThemeNav menu={menu}>
      <a href="/">
        <img src={logo} alt="Motors Shop Logo" />
      </a>
      {mobile && !menu && <HiMenu onClick={() => setMenu(true)} />}
      {mobile && menu && <HiX onClick={() => setMenu(false)} />}

      <nav>
        <ul>
          <li>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>
        {!token ? (
          <div className="buttons">
            <ThemeButton variant="light" onClick={() => navigate("/login")}>
              Fazer Login
            </ThemeButton>
            <ThemeButton outlined variant="negative" onClick={() => navigate("/register")}>
              Cadastrar
            </ThemeButton>
          </div>
        ) : (
          <Dropbox />
        )}
      </nav>
    </ThemeNav>
  );
};

export default Navbar;
