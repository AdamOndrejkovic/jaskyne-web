import api from "@/services/api"
import { defineStore, storeToRefs } from "pinia"
import { Cave, CavesState } from "@/types/types"
import { string } from "yup"


type CavesGetters = {
    
}

type CavesActions = {
    getAllCaves: () => Promise<void>,
    setRegion: (region: string) => void,
    getFilteredCaves: () => Cave[]
    clearRegion: () => void,
    setEditId: (id: string) => void,
    clearEditId: () => void,
}

const useCavesStore = defineStore<string, CavesState, CavesGetters, CavesActions>("cavesStore", {
    state: () => {
        return {
            caves: [],
            region: null,
            editId: null
        }
    },
    getters: {
        cavesCount(state) {
            return this.caves.length
        },
        getAllCavesByRegion(state) {
            if(this.caves.length > 0) {
                return this.caves.filter(cave => cave.region === this.region)
            }   
            
            return null
        }
    },
    actions: {
        async getAllCaves() {
            this.caves = await api.getAllCaves()
        },
        getFilteredCaves(): Cave[] {
            return this.caves.filter(cave => cave.region === this.region)
        },
        setRegion(region: string) {
            this.region = region
        },
        clearRegion(){
            this.region = null
        },
        setEditId(id: string) {
            this.editId = id
        },
        clearEditId() {
            this.editId = null
        }
    }
})


export const useCavesState = () => storeToRefs(useCavesStore())

export const useCavesGetters = () => storeToRefs(useCavesStore())

export const useCavesActions = () => useCavesStore()

export const clearCavesState = () => useCavesStore().$reset

