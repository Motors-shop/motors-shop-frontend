import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../Input";
import ThemeButton from "../../ThemeButton";

import { IValidateCodeProps } from "../types";
import { RecoveryForm } from "../styles";
import { api } from "../../../service/api";

const formSchema = yup.object().shape({
  code: yup
    .string()
    .length(6, "O código tem 6 dígitos")
    .required("Você precisa fornecer o código de recuperação"),
});

const ValidateCodeForm: FC<IValidateCodeProps> = ({
  nextStep,
  prevStep,
  email,
}) => {
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleCodeSubmit(data: Record<string, any>) {
    setIsAwaitingRequest(true);

    api
      .post(`/session/recovery/${data.code}`, {
        email,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("@motorsShop:recoveryToken", res.data.token);
          nextStep();
        }
      })
      .catch((err) => {
        console.error(err);
        prevStep();
      });
  }

  return (
    <RecoveryForm onSubmit={handleSubmit(handleCodeSubmit)}>
      <h2>Recuperar senha</h2>
      <p>Informe abaixo o código de seis dígitos recebido por e-mail:</p>
      <Input
        register={register}
        error={errors.code && (errors.code?.message as string)}
        placeholder="000000"
        type="text"
        label="Código de recuperação"
        name="code"
        disabled={isAwaitingRequest}
      />
      <ThemeButton type="submit" variant="primary" disabled={isAwaitingRequest}>
        Confirmar código
      </ThemeButton>
      <ThemeButton
        type="button"
        variant="negative"
        disabled={isAwaitingRequest}
        outlined
        onClick={prevStep}
      >
        Voltar
      </ThemeButton>
    </RecoveryForm>
  );
};

export default ValidateCodeForm;
