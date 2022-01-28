import {
  RickMortyCharacterList,
  CharacterResult,
} from "./character-list-rick.model";

export const getCharacters = (): Promise<RickMortyCharacterList> => {
  return fetch(`https://rickandmortyapi.com/api/character`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  });
};

export const getCharacter = (idCharacter: string): Promise<CharacterResult> => {
  return fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return [];
      }
    }
  );
};
