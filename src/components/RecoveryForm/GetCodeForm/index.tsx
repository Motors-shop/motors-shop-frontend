import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../Input";
import ThemeButton from "../../ThemeButton";

import { IGetCodeProps } from "../types";
import { RecoveryForm } from "../styles";
import { api } from "../../../service/api";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Você precisa fornecer um e-mail válido")
    .required("Você precisa fornecer um e-mail"),
});

const GetCodeForm: FC<IGetCodeProps> = ({ nextStep, setEmail }) => {
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleEmailSubmit(data: Record<string, any>) {
    setIsAwaitingRequest(true);

    api
      .post("/session/recovery", {
        email: data.email,
      })
      .then((res) => {
        if (res.status === 200) {
          setEmail(data.email);
          nextStep();
        }
      });
  }

  return (
    <RecoveryForm onSubmit={handleSubmit(handleEmailSubmit)}>
      <h2>Recuperar senha</h2>
      <p>
        Se você esqueceu ou quer trocar de senha, informe o seu endereço de
        e-mail abaixo para prosseguir com a troca:
      </p>
      <Input
        register={register}
        error={errors.email && (errors.email?.message as string)}
        placeholder="johndoe@mail.com"
        type="email"
        label="Endereço de e-mail"
        name="email"
        disabled={isAwaitingRequest}
      />
      <ThemeButton type="submit" variant="primary" disabled={isAwaitingRequest}>
        Enviar e-mail de recuperação
      </ThemeButton>
    </RecoveryForm>
  );
};

export default GetCodeForm;
