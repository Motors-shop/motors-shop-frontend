import React from "react";
import { api } from "../../service/api";
import ThemeButton from "../ThemeButton";
import { StyledContainer, StyledHorizontalDisplay } from "./style";

const DeleteVehicle: React.FC = () => {
  const confirmDelete = () => {
    api.delete("/vehicles/").then((res) => {
      // close Modal
    });
  };

  return (
    <StyledContainer>
      <h4>Tem certeza que deseja remover este anúncio</h4>
      <p>
        Essa ação não pode ser desfeita. Isso Exluirá permanentemente sua conta
        e removerá seus dados de nossos servidores.
      </p>
      <StyledHorizontalDisplay>
        <ThemeButton variant="negative">Cancelar</ThemeButton>
        <ThemeButton onClick={confirmDelete} variant="alert" type="submit">
          Sim, excluir anúncio
        </ThemeButton>
      </StyledHorizontalDisplay>
    </StyledContainer>
  );
};

export default DeleteVehicle;
