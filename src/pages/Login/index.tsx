import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import ThemeButton from "../../components/ThemeButton";
import { ThemeLogin } from "./style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const navigate = useNavigate();
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
    console.log(data);
    // enviar dados para API e devolver uma resposta
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
          <ThemeButton outlined variant="negative" onClick={() => navigate("/register")}>
            Cadastrar
          </ThemeButton>
        </form>
      </ThemeLogin>
      <Footer />
    </>
  );
};

export default Login;
