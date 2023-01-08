import EditAddress from "../../EditAddress";
import EditProfile from "../../EditProfile";
import FeedbackMenssage from "../../FeedbackMenssage";
import Modal from "../../Modal";

const NavbarModals = () => {
  return (
    <>
      <Modal name="editProfile" title="Editar Perfil">
        <EditProfile />
      </Modal>

      <Modal name="editAddress" title="Editar Endereço">
        <EditAddress />
      </Modal>

      <FeedbackMenssage
        name="editProfileSucess"
        title="Sucesso!"
        subtitle="Perfil atualizado"
        menssage="Seus dados foram atualizados com sucesso"
      />
      <FeedbackMenssage
        name="editAddressSucess"
        title="Sucesso!"
        subtitle="Endereço atualizado"
        menssage="Seus dados foram atualizados com sucesso"
      />
      <FeedbackMenssage
        name="actionError"
        title="Error!"
        subtitle="Ops! Algo deu errado"
        menssage="Ocorreu um erro ao tentar atualizar seus dados, por favor tente novamente mais tarde."
      />
    </>
  );
};

export default NavbarModals;
