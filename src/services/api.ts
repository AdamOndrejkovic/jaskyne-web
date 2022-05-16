import axios from "axios";
import { User } from "@/types/types";
import { LoginUser, RegisterUser, Cave } from "@/types/api";

const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
  },
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
  }
);

export default {
  // Auth api calls
  registerUser: async (user: RegisterUser): Promise<User> => {
    return await client.post("/users/register", user);
  },
  loginUser: async (user: LoginUser): Promise<User> => {
    return await client.post("/users/login", user);
  },
  // Caves api calls
  createCave: async (cave: Cave): Promise<any> => {
    return await client.post("/caves", cave)
  },
  getAllCaves: async (): Promise<Cave[]> => {
    return await client.get("/caves")
  },
  getCaveById: async (id: number): Promise<Cave> => {
    return await client.get(`/caves/${id}`)
  },
  updateCave: async (cave: Cave): Promise<any> => {
    return await client.patch(`/caves/${cave._id}`, cave)
  },
  deleteCave: async (id: string): Promise<any> => {
    return await client.delete(`/caves/${id}`)
  }
  // Blog api calls

  // Contact api calls
};
