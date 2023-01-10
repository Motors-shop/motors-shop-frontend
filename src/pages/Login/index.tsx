import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import ThemeButton from "../../components/ThemeButton";
import ThemeLinkButton from "../../components/ThemeLinkButton";

import { ThemeLogin } from "./style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../service/api";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserProvider";
import FeedbackMenssage from "../../components/FeedbackMenssage";
import { useModalControls } from "../../components/Modal";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { setUser, setLoadingUser } = useContext(UserContext);
  const { openModal, closeModal } = useModalControls();
  const location = useLocation();

  window.scrollTo(0, 0);

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendForm = (data: FieldValues) => {
    api
      .post("/session", data)
      .then((res) => {
        localStorage.setItem("@motorsShop:token", res.data.token);

        openModal("sessionSuccess");

        api
          .get("/users/profile", {
            headers: { Authorization: `Bearer ${res.data.token}` },
          })
          .then((res) => {
            setUser(res.data);
            setLoadingUser(false);
          });
      })
      .catch((_) => openModal("sessionError"));
  };

  useEffect(() => {
    if (location.state && location.state.newPassword) {
      openModal("changedPassword");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FeedbackMenssage
        name="sessionSuccess"
        title="Sucesso"
        menssage="Login efetuado com sucesso."
        closeable={false}
      >
        <ThemeLinkButton variant="primary" to="/" onClick={() => closeModal()}>
          Ver Produtos
        </ThemeLinkButton>
      </FeedbackMenssage>

      <FeedbackMenssage name="sessionError" title="Error" menssage="Email ou senha incorreto." />

      <FeedbackMenssage
        name="changedPassword"
        title="Senha alterada"
        menssage="Agora faça o login normalmente com a sua nova senha."
      />

      <Navbar />
      <ThemeLogin>
        <form onSubmit={handleSubmit(sendForm)}>
          <h2>Login</h2>

          <Input
            register={register}
            error={errors.email && "Campo obrigatório"}
            placeholder="Digitar email"
            type="email"
            label="Email"
            name="email"
          />
          <div>
            <Input
              register={register}
              error={errors.password && "Campo obrigatório"}
              placeholder="Digitar senha"
              type="password"
              label="Senha"
              name="password"
            />
            {/* <span>Esqueci minha senha</span> */}
          </div>
          <ThemeLinkButton to="/recovery" variant="link">
            Esqueci minha senha
          </ThemeLinkButton>

          <ThemeButton variant="primary" type="submit">
            Entrar
          </ThemeButton>
          <span>Ainda não possui conta?</span>
          <ThemeLinkButton outlined variant="negative" to="/register">
            Cadastrar
          </ThemeLinkButton>
        </form>
      </ThemeLogin>
      <Footer />
    </>
  );
};

export default Login;
