import { DifficultyEnum, RegionEnum } from "./models";

export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export type Cave = {
  _id: string;
  title: string;
  description: string;
  region: RegionEnum;
  location: string;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
};

export type CavesState = {
  caves: Cave[];
  region: string | null;
  editId: string | null;
};

export type Chat = {
  uuid: string;
  userId: string;
  firstName: string;
  text: string;
  room: string;
};
