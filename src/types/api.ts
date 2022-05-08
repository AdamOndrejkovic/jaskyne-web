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
  id: string;
  title: string;
  description: string;
  region: string;
  location: RegionEnum;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
}
