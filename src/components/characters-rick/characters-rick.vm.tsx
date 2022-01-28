export interface ListInfoRick {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterRick {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export type ListResult = CharacterRick[];
