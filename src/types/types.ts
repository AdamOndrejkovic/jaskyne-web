import { DifficultyEnum, RegionEnum } from "./models";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  userList: Array<string>;
}

export type Cave = {
  id: string
  title: string;
  description: string;
  region: string;
  location: RegionEnum;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
}


export type CavesState = {
  caves: Cave[]
  region: string | null
}

