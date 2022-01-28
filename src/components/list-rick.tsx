import React from "react";
import { getCharacters } from "../api/rick/api-rick";
import { RickTable } from "./characters-rick/characters-rick";
import { mapRickMortyCharacterListToListResultVM } from "./characters-rick/characters-rick.mappers";
import { CharacterRick } from "./characters-rick/characters-rick.vm";

export const ListRickMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterRick[]>([]);

  React.useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(mapRickMortyCharacterListToListResultVM(data));
    });
  }, []);

  return (
    <>
      <h2>Hello from List page Rick Morty</h2>

      <input type="text" />

      <button>Buscar</button>

      <RickTable characters={characters} />
    </>
  );
};
