import { CharactersAdapter } from "@/adapters";
import config from "./config";

export const getApi = async (params: string) => {
  return fetch(`${config.apiUrl}/${params}`)
    .then((res) => res.json())
    .then((res) => res);
};

export const getAllEpisodes = async () => {
  return await getApi(`/episode`);
};

export const getAllCharacters = async (page: number) => {
  const result = await getApi(`/character?page=${page}`);
  return {
    pageInfo: result.info,
    characters: CharactersAdapter(result?.results),
  };
};

export const getAllLocations = async () => {
  return await getApi(`/location`);
};
