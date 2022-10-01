import { Character } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCharacter from "../Home/components/basics/CardCharacter";
import { geCharacterById } from "./services/rickmorty.service";

const CharacterDetail = () => {
  const [character, setCharacter] = useState<Character>();
  const params = useParams();
  console.log(params);

  const getCharacter = async () => {
    const result = await geCharacterById(String(params?.id));
    setCharacter(result);
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div className="max-w-xs m-auto">
      <CardCharacter character={character} />
    </div>
  );
};
export default CharacterDetail;
