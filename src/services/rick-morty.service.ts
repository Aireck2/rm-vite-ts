import config from "./config";

export const getApi = async (params: string) => {
  return fetch(`${config.apiUrl}/${params}`)
    .then((res) => res.json())
    .then((res) => res);
};

export const getAllEpisodes = async () => {
  return await getApi(`/episode`);
};

export const getAllCharacters = async () => {
  return await getApi(`/character`);
};

export const getAllLocations = async () => {
  return await getApi(`/location`);
};
