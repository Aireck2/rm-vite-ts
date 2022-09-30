export interface Episode {
  id: string;
  name: string;
  episode: string;
  airDate: string;
  created: string;
}
export const EpisodeEmptyState: Episode = {
  id: "",
  name: "",
  episode: "",
  airDate: "",
  created: "",
};
