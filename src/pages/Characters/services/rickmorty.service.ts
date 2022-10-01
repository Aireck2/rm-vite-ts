import { CharacterAdapter } from "@/adapters";
import { getApi } from "@/services";

export const geCharacterById = async (id: string) => {
  const result = await getApi(`/character/${id}`);
  return CharacterAdapter(result);
};
