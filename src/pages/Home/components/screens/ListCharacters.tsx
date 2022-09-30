import { FC } from "react";
import { Character } from "@/models";

import CardCharacter from "../basics/CardCharacter";

const ListCharacters: FC<{ characters: Character[] }> = ({ characters }) => {
  const title = "Personajes Principales ";
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-10 sm:grid-cols-3 lg:grid-cols-5 ">
          {characters.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCharacters;
