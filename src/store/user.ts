import { defineStore, storeToRefs } from "pinia";
import { User } from "@/types/types";


const useUserStore = defineStore("user", {
  state: () => ({
    loggedUser: undefined as User | undefined,
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
    logout() {
      this.loggedUser = undefined
    },
    can(): boolean {
      if (this.loggedUser && this.loggedUser.role === "admin") {
        return true
      }

      return false
    }
  },
})

export const useUserState = () => storeToRefs(useUserStore())

export const useUserGetters = () => storeToRefs(useUserStore())

export const useUserActions = () => useUserStore()

export const clearUserState = () => useUserStore().$reset
