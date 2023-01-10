import React from "react";
import Modal from "../Modal";
import { StyledContainer } from "./style";
import { IFeedbackMessage } from "./type";

const FeedbackMenssage: React.FC<React.PropsWithChildren<IFeedbackMessage>> = ({
  children,
  title,
  name,
  subtitle,
  menssage,
  closeable = true,
}) => {
  return (
    <Modal
      name={name}
      title={title}
      feedback
      closeable={closeable}
      supressCloseableModalWarning={!closeable ? true : false}
    >
      <StyledContainer>
        {!!subtitle && <h4>{subtitle}</h4>}
        <p>{menssage}</p>
        {children}
      </StyledContainer>
    </Modal>
  );
};

export default FeedbackMenssage;
