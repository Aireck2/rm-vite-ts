import { CharactersAdapter, EpisodeAdapter } from "@/adapters";
import { getAllEpisodes, getApi } from "@/services";

export const getMainCharacters = async () => {
  const mainIds = Array.from(Array(5).keys())
    .map((index) => index + 1)
    .join(",");

  const result = await getApi(`/character/${mainIds}`);
  return CharactersAdapter(result);
};

export const getMainEpisodes = async () => {
  const listEpisodes = await getAllEpisodes();
  const firstEpisode = 1;
  const lastEpisode = listEpisodes?.info?.count;
  const ids = `${firstEpisode},${lastEpisode}`;

  const result = await getApi(`/episode/${ids}`);
  return EpisodeAdapter(result);
};
