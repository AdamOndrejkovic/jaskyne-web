import { defineStore, storeToRefs } from "pinia";
import { User } from "@/types/types";


const useUserStore = defineStore("user", {
  state: () => ({
    loggedUser: {} as User,
  }),
  getters: {
    user: (state) => {
      if (state.loggedUser != undefined) return state.loggedUser;
      else return undefined;
    },
  },
  actions: {
    setUser(user: User) {
      this.loggedUser = user
    },
  },
})

export const useUserState = () => storeToRefs(useUserStore())

export const useUserGetters = () => storeToRefs(useUserStore())

export const useUserActions = () => useUserStore()

export const clearUserState = () => useUserStore().$reset
