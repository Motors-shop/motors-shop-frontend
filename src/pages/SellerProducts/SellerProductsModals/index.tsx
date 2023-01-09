import FeedbackMenssage from "../../../components/FeedbackMenssage";
import Modal from "../../../components/Modal";
import ThemeButton from "../../../components/ThemeButton";
import VehicleRegister from "../../../components/VehicleRegister";

const SellerProductsModals = () => {
  return (
    <>
      <Modal name="vehicleRegister" title="Criar Anuncio">
        <VehicleRegister />
      </Modal>

      <FeedbackMenssage
        name="vehicleUpdateSucess"
        title="Sucesso!"
        menssage="Seu anúncio foi atualizado com sucesso!"
      >
        <p>
          Atualize a página clicando no botão abaixo para ver as alterações, ou continue editando
          outros anúncios
        </p>
        <ThemeButton variant="primary" onClick={() => window.location.reload()}>
          Reload
        </ThemeButton>
      </FeedbackMenssage>

      <FeedbackMenssage
        name="vehicleDeleteSucess"
        title="Sucesso!"
        menssage="Seu anúncio foi removido com sucesso!"
      >
        <p>
          Atualize a página clicando no botão abaixo para ver as alterações, ou continue editando
          outros anúncios
        </p>
        <ThemeButton variant="primary" onClick={() => window.location.reload()}>
          Reload
        </ThemeButton>
      </FeedbackMenssage>

      <FeedbackMenssage
        name="vehicleUpdateError"
        subtitle="Error!"
        title="Ops! algo deu errado."
        menssage="Ocorreu um erro ao tentar atualizar seu anúncio, tente novamente mais tarde."
      />

      <FeedbackMenssage
        name="vehicleDeleteError"
        subtitle="Error!"
        title="Ops! algo deu errado."
        menssage="Ocorreu um erro ao tentar remover seu anúncio, tente novamente mais tarde."
      />

      <FeedbackMenssage
        name="vehicleRegisterSucess"
        subtitle="Sucesso!"
        title="Seu anúncio foi criado com sucesso!"
        menssage="Agora você poderá ver negócios crescendo em grande escala"
      />
      <FeedbackMenssage
        name="vehicleRegisterError"
        subtitle="Error!"
        title="Ops! algo deu errado."
        menssage="Ocorreu um erro ao tentar cadastrar um novo veículo, por favor tente novamente mais tarde"
      />
    </>
  );
};

export default SellerProductsModals;
