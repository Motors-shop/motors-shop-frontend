import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import ThemeButton from "../../components/ThemeButton";
import ThemeLinkButton from "../../components/ThemeLinkButton";

import { ThemeLogin } from "./style";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../service/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setLoadingUser } = useContext(UserContext);

  const schema = yup.object().shape({
    user: yup.string().required(),
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
        toast.success("Login efetuado com sucesso!");

        api
          .get("/users/profile", { headers: { Authorization: `Bearer ${res.data.token}` } })
          .then((res) => {
            setUser(res.data);
            setLoadingUser(false);
            return navigate("/");
          });
      })
      .catch((err) => toast.error("Email ou senha incorreto."));
  };

  return (
    <>
      <Navbar />
      <ThemeLogin>
        <form onSubmit={handleSubmit(sendForm)}>
          <h2>Login</h2>

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Digitar usuário"
            type="text"
            label="Usuário"
            name="user"
          />
          <div>
            <Input
              register={register}
              error={errors.password?.message as string}
              placeholder="Digitar senha"
              type="password"
              label="Senha"
              name="password"
            />
            <span>Esqueci minha senha</span>
          </div>

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
