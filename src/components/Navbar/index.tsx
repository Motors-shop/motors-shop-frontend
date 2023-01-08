import { useContext, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Dropbox from "./Dropbox";
import ThemeLinkButton from "../ThemeLinkButton";

import logo from "../../assets/motors_shop_logo_color.svg";
import { ThemeNav } from "./style";
import { UserContext } from "../../contexts/UserProvider";
import { Link } from "react-router-dom";
import NavbarModals from "./NavbarModals";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const { loadingUser } = useContext(UserContext);

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

  const scrollTo = (name: string) => {
    const section = window.document.getElementById(name);
    const rect = section!.getBoundingClientRect();

    const position = rect.top + window.scrollY;
    const navBar = 15 * (window.innerHeight / 100);

    window.scrollTo(0, position - navBar);
  };

  return (
    <>
      <NavbarModals />
      <ThemeNav menu={menu}>
        <Link to="/">
          <img src={logo} alt="Motors Shop Logo" />
        </Link>
        {mobile && !menu && <HiMenu onClick={() => setMenu(true)} />}
        {mobile && menu && <HiX onClick={() => setMenu(false)} />}

        <nav>
          <ul>
            <li onClick={() => scrollTo("cars")}>Carros</li>
            <li onClick={() => scrollTo("motorbikes")}>Motos</li>
            <li onClick={() => scrollTo("auction")}>Leilão</li>
          </ul>
          {loadingUser ? (
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
