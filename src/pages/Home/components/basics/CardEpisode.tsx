import { FC } from "react";
import { Episode } from "@/models";
import { prettyDateTime } from "@/helpers/format";

const CardEpisode: FC<{ episode: Episode }> = ({ episode }) => {
  const randomImg = (id: string) =>
    `https://rickandmortyapi.com/api/character/avatar/${id}2.jpeg`;
  return (
    <a key={episode.id} href={episode.id} className="group">
      <div className="flex justify-center">
        <div className="aspect-w-1 aspect-h-1  overflow-hidden rounded-lg  ">
          <img
            src={randomImg(episode.id)}
            alt={episode.name}
            className="h-100 w-100 object-cover object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        {prettyDateTime(episode.created)}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{episode.name}</p>
    </a>
  );
};

export default CardEpisode;
