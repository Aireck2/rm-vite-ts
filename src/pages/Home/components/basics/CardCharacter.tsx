import { FC } from "react";
import { Character } from "@/models";

const CardCharacter: FC<{ character?: Character }> = ({ character }) => {
  if (!character) return <>Loading...</>;
  return (
    <a
      key={character.id}
      href={`/characters/${character.id}`}
      className="group"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{character.name}</h3>
    </a>
  );
};

export default CardCharacter;
