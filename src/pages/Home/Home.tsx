import { useEffect, useState } from "react";

import { Character, Episode } from "@/models";

import { ListCharacters, ListEpisodes } from "./components";
import { getMainCharacters, getMainEpisodes } from "./services";

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const listMainCharacters = async () => {
    const result = await getMainCharacters();
    setCharacters(result);
  };

  const listEpisodes = async () => {
    const result = await getMainEpisodes();
    setEpisodes(result);
  };

  useEffect(() => {
    listMainCharacters();
    listEpisodes();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ListCharacters characters={characters} />
      <ListEpisodes episodes={episodes} />
    </div>
  );
};

export default Home;
