export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
}

export const CharacterEmptyState: Character = {
  id: "",
  name: "",
  image: "",
  status: "",
  species: "",
};

export const CharactersEmptyState: Character[] = [];
