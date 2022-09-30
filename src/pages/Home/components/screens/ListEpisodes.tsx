import { FC } from "react";
import { Episode } from "@/models";

import CardEpisode from "../basics/CardEpisode";

const ListEpisodes: FC<{ episodes: Episode[] }> = ({ episodes }) => {
  const title = "Primer Episodio - Ultimo Episodio ";
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-10 ">
          {episodes.map((episode, index) => (
            <CardEpisode key={index} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListEpisodes;
