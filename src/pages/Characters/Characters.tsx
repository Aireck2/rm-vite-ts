import { getAllCharacters } from "@/services";
import { useEffect, useState } from "react";
import { ListCharacters } from "../Home/components";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, _setPerPage] = useState(42);
  const [total, setTotal] = useState(0);

  const pageInfo = {
    page,
    perPage,
    total,
    setPage,
  };

  const getCharacters = async () => {
    const result = await getAllCharacters(page);
    setCharacters(result.characters);
    setTotal(result.pageInfo.count);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <>
      <ListCharacters
        title={`Personajes (${characters.length})`}
        characters={characters}
        pageInfo={pageInfo}
      />
      ;
    </>
  );
};
export default Characters;
