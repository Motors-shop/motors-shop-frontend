import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../Input";
import ThemeButton from "../../ThemeButton";

import { RecoveryForm } from "../styles";
import { api } from "../../../service/api";
import { useNavigate } from "react-router-dom";

const formSchema = yup.object().shape({
  password: yup.string().required("Digite sua nova senha"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirme sua nova senha"),
});

const SetPasswordForm: FC = () => {
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleNewPassword(data: Record<string, any>) {
    setIsAwaitingRequest(true);

    api
      .patch(
        `/users/password`,
        {
          password: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "@motorsShop:recoveryToken"
            )}`,
          },
        }
      )
      .then((res) => {
        localStorage.removeItem("@motorsShop:recoveryToken");
        navigate("/login", {
          state: {
            newPassword: true,
          },
        });
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <RecoveryForm onSubmit={handleSubmit(handleNewPassword)}>
      <h2>Nova senha</h2>
      <p>Agora vamos definir uma nova senha:</p>
      <Input
        register={register}
        error={errors.password && (errors.password?.message as string)}
        type="password"
        label="Nova senha"
        name="password"
        disabled={isAwaitingRequest}
      />
      <Input
        register={register}
        error={
          errors.passwordConfirmation &&
          (errors.passwordConfirmation?.message as string)
        }
        type="password"
        label="Repita a senha"
        name="passwordConfirmation"
        disabled={isAwaitingRequest}
      />
      <ThemeButton type="submit" variant="primary" disabled={isAwaitingRequest}>
        Definir senha
      </ThemeButton>
      <ThemeButton
        type="button"
        variant="negative"
        disabled={isAwaitingRequest}
        outlined
        onClick={() => {
          localStorage.removeItem("@motorsShop:recoveryToken");
          navigate("/login", {
            replace: true,
          });
        }}
      >
        Cancelar
      </ThemeButton>
    </RecoveryForm>
  );
};

export default SetPasswordForm;
