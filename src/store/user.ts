import { defineStore, storeToRefs } from "pinia"

type UserState = {

}

type UserGetters = {

}

type UserActions = {

}

export const useUserStore = defineStore<string, UserState, UserGetters, UserActions>("userStore", {
    state: () => {
        return {

        }
    },
    getters: {

    },
    actions: {

    }
})

export const useUserState = () => storeToRefs(useUserStore())

export const useUserGetters = () => storeToRefs(useUserStore())

export const useUserActions = () => useUserStore()

export const clearUserState = () => useUserStore().$reset