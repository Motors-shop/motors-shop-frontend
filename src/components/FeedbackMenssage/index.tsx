import React from "react";
import { StyledContainer } from "./style";
import { IFeedbackMessage } from "./type";

const FeedbackMenssage: React.FC<React.PropsWithChildren<IFeedbackMessage>> = ({
  children,
  title,
  menssage,
}) => {
  return (
    <StyledContainer>
      <h4>{title}</h4>
      <p>{menssage}</p>
      {children}
    </StyledContainer>
  );
};

export default FeedbackMenssage;
