import api from "@/services/api"
import { defineStore, storeToRefs } from "pinia"
import { CavesState } from "@/types/types"


type CavesGetters = {
    
}

type CavesActions = {
    getAllCaves: () => Promise<void>,
    setRegion: (region: string) => void,
    clearRegion: () => void,
}

const useCavesStore = defineStore<string, CavesState, CavesGetters, CavesActions>("cavesStore", {
    state: () => {
        return {
            caves: [],
            region: null
        }
    },
    getters: {
        cavesCount(state) {
            return this.caves.length
        },
        getAllCavesByRegion(state) {
            if(this.caves.length > 0) {
                return this.caves.filter(cave => cave.location === this.region)
            }   
            
            return null
        }
    },
    actions: {
        async getAllCaves() {
            this.caves = await api.getAllCaves()
        },
        setRegion(region: string) {
            this.region = region
        },
        clearRegion(){
            this.region = null
        }
    }
})

export const useCavesState = () => storeToRefs(useCavesStore())

export const useCavesGetters = () => storeToRefs(useCavesStore())

export const useCavesActions = () => useCavesStore()

export const clearCavesState = () => useCavesStore().$reset

