import { Character } from "@/models";

export const CharactersAdapter = (characters: any) => {
  return characters?.map((character: Character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species,
  }));
};
