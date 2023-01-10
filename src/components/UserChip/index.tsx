import React from "react";

import { AvatarContainer, Initials, Name, UserChipContainer } from "./style";
import { type IUserChipProps } from "./types";

const UserChip: React.FC<IUserChipProps> = ({ name, avatar, whiteText, user = false }) => {
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
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[name.split(" ").length - 1];

    if (firstName.length > 0 && firstName.length <= 5) {
      return firstName.length;
    } else {
      if (Math.abs(firstName.length - lastName.length) === 0) {
        return 1;
      } else {
        return Math.abs(firstName.length - lastName.length);
      }
    }
  }

  return (
    <UserChipContainer whiteText={whiteText}>
      <AvatarContainer user={user} randomColor={generateRandomColorNumberByNameSeed(name)}>
        {avatar ? (
          <img src={avatar} alt={`Foto de perfil de ${name}`} draggable={false} />
        ) : (
          <Initials>{getNameInitials(name)}</Initials>
        )}
      </AvatarContainer>
      <Name>{name}</Name>
    </UserChipContainer>
  );
};

export default UserChip;
