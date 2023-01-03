import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import ThemeButton from "../../components/ThemeButton";
import { ThemeLogin } from "./style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Senha não corresponde"),
    email: yup.string().required(),
    cpf: yup.string().required().max(11),
    phone: yup.string().required(),
    birthDate: yup.string().required(),
    biography: yup.string().required(),
    accountType: yup.string().required(),

    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().required(),
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
          <h2>Cadastro</h2>

          <h4>Informações Pessoais</h4>
          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Ex. Samuel Leão"
            type="text"
            label="Nome"
            name="name"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Ex. samuel@kenzie.com.br"
            type="text"
            label="Email"
            name="email"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="000.000.000-00"
            type="text"
            label="CPF"
            name="cpf"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="(DDD) 90000-0000"
            type="text"
            label="Celular"
            name="phone"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="(DDD) 90000-0000"
            type="text"
            label="Data de Nascimeto"
            name="birthDate"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="Digitar Descrição"
            type="textarea"
            label="Descrição"
            name="biography"
          />

          <h4>Informações de endereço</h4>

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="00000-000"
            type="text"
            label="CEP"
            name="cep"
          />

          <Input
            register={register}
            error={errors.user?.message as string}
            placeholder="00000-000"
            type="text"
            label="CEP"
            name="cep"
          />

          <Input
            register={register}
            error={errors.password?.message as string}
            placeholder="Digitar senha"
            type="password"
            label="Senha"
            name="password"
          />

          <ThemeButton variant="primary" type="submit">
            Entrar
          </ThemeButton>
          <span>Ainda não possui conta?</span>
          <ThemeButton
            outlined
            variant="negative"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </ThemeButton>
        </form>
      </ThemeLogin>
      <Footer />
    </>
  );
};

export default Register;
