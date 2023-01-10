import React from "react";
import { StyledContainer } from "./style";

const LoadingCard: React.FC = () => {
  return (
    <StyledContainer>
      <div className="image" />
      <div className="title" />
      <div className="description" />
      <div className="horizontal">
        <div className="userImage" />
        <div className="userName" />
      </div>
      <div className="horizontalBorder">
        <div className="horizontal">
          <div className="tag" />
          <div className="tag" />
        </div>
        <div className="price" />
      </div>
    </StyledContainer>
  );
};

export default LoadingCard;
