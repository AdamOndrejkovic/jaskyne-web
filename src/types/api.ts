import { DifficultyEnum, RegionEnum } from "./models";

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface Cave {
  _id: string;
  title: string;
  description: string;
  region: RegionEnum;
  location: string;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
}
