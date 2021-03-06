import axios from "axios";
import { Cave, User } from "@/types/types";
import { Email, LoginUser, RegisterUser } from "@/types/api";

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
    return await client.post("/auth/register", user);
  },
  loginUser: async (user: LoginUser): Promise<User> => {
    return await client.post("/auth/login", user);
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
  },
  // Blog api calls

  // Contact api calls
  sendMail: async (email: Email): Promise<any> => {
    return await client.post("/mailer", email)
  }
};
