import { useContext, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Dropbox from "./Dropbox";
import ThemeLinkButton from "../ThemeLinkButton";

import logo from "../../assets/motors_shop_logo_color.svg";
import { ThemeNav } from "./style";
import { UserContext } from "../../contexts/UserProvider";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import EditProfile from "../EditProfile";
import EditAddress from "../EditAddress";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const { token, loadingUser } = useContext(UserContext);

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
    <>
      <Modal name="editProfile" title="Editar Perfil">
        <EditProfile />
      </Modal>

      <Modal name="editAddress" title="Editar Endereço">
        <EditAddress />
      </Modal>

      <ThemeNav menu={menu}>
        <Link to="/">
          <img src={logo} alt="Motors Shop Logo" />
        </Link>
        {mobile && !menu && <HiMenu onClick={() => setMenu(true)} />}
        {mobile && menu && <HiX onClick={() => setMenu(false)} />}

        <nav>
          <ul>
            <li>Carros</li>
            <li>Motos</li>
            <li>Leilão</li>
          </ul>
          {!token || loadingUser ? (
            <div className="buttons">
              <ThemeLinkButton variant="light" to="/login">
                Fazer Login
              </ThemeLinkButton>
              <ThemeLinkButton outlined variant="negative" to="/register">
                Cadastrar
              </ThemeLinkButton>
            </div>
          ) : (
            <Dropbox />
          )}
        </nav>
      </ThemeNav>
    </>
  );
};

export default Navbar;
