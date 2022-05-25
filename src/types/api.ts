import { DifficultyEnum, RegionEnum } from "./models";

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface Cave {
  title: string;
  description: string;
  region: RegionEnum;
  location: string;
  difficulty: DifficultyEnum;
  duration: string;
  image: string;
}

export interface Chat {
  userId: string;
  firstName: string;
  text: string;
  room: string;
}
