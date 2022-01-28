import * as am from "../../api/rick/character-list-rick.model";
import * as vm from "./characters-rick.vm";

export const mapRickMortyCharacterListToListInfoRickVM = (
  data: am.RickMortyCharacterList
): vm.ListInfoRick => ({
  count: data.info.count,
  pages: data.info.pages,
  next: data.info.next,
  prev: data.info.prev,
});

export const mapRickMortyCharacterListToListResultVM = (
  data: am.RickMortyCharacterList
): vm.ListResult => {
  return data.results.map(mapCharacterResultToCharacterRickVM);
};

export const mapRickMortyCharacterToResultVM = (
  data: am.CharacterResult
): vm.CharacterRick => {
  return mapCharacterResultToCharacterRickVM(data);
};

const mapCharacterResultToCharacterRickVM = (
  data: am.CharacterResult
): vm.CharacterRick => {
  return {
    ...data,
    created: data ? new Date(data?.created) : new Date(),
  };
};
