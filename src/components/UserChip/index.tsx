import React from "react";

import { AvatarContainer, Initials, Name, UserChipContainer } from "./style";
import { type IUserChipProps } from "./types";

const UserChip: React.FC<IUserChipProps> = ({ name, avatar, whiteText }) => {
  function getNameInitials(name: string): string {
    const splittedName = name.split(" ");

    return splittedName
      .map((word, i) => {
        if (i === 0 || i === splittedName.length - 1) {
          return word[0].toUpperCase();
        }

        return undefined;
      })
      .filter((w) => w)
      .join("");
  }

  function generateRandomColorNumberByNameSeed(name: string): number {
    const randomNumber = Math.ceil(name.length ** 2 % 12);

    if (randomNumber <= 0 || randomNumber > 12) return 1;
    else return randomNumber;
  }

  return (
    <UserChipContainer whiteText={whiteText}>
      <AvatarContainer randomColor={generateRandomColorNumberByNameSeed(name)}>
        {avatar ? (
          <img
            src={avatar}
            alt={`Foto de perfil de ${name}`}
            draggable={false}
          />
        ) : (
          <Initials>{getNameInitials(name)}</Initials>
        )}
      </AvatarContainer>
      <Name>{name}</Name>
    </UserChipContainer>
  );
};

export default UserChip;
