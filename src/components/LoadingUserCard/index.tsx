import React from "react";
import { StyledContainer } from "./style";

const LoadingUserCard: React.FC = () => {
  return (
    <StyledContainer>
      <div className="userImage" />
      <div className="horizontal">
        <div className="userName" />
        <div className="tag" />
      </div>
      <div className="description" />
    </StyledContainer>
  );
};

export default LoadingUserCard;
