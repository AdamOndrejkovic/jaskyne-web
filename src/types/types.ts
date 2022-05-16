import { DifficultyEnum, RegionEnum } from "./models";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type Cave = {
  _id: string
  title: string;
  description: string;
  region: RegionEnum;
  location: string;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
}


export type CavesState = {
  caves: Cave[]
  region: string | null
  editId: string | null
}

