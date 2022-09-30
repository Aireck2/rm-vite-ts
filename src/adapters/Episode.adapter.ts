import { Episode } from "@/models";

export const EpisodeAdapter = (episodes: any[]) => {
  return episodes?.map((episode: any) => ({
    id: episode.id,
    name: episode.name,
    episode: episode.episode,
    airDate: episode.air_date,
    created: episode.created,
  }));
};
