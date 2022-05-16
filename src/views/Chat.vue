<template>
    <div>
        <div class="flex justify-center items-center gap-6">
            <span>General</span>
            <span>Tipy</span>
            <span>Otazky</span>
            <span>Napady</span>
        </div>
    </div>
</template>
<script lang="ts">
import { useChatActions, useChatState } from '@/store/chat'
import { useUserState } from '@/store/user'
import { Chat } from '@/types/types'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const { loggedUser } = useUserState()
        const { chats  } = useChatState()
        const { sendMessage, setRoom } = useChatActions()
        const room = ref<string>("general")
        const message = ref<string>("")
        const filteredChat = <Chat[]>([])

        const send = () => {
            const messageObject: Chat = {
                uuid: "" ,
                firstName: loggedUser.value?.firstName as string,
                text: message.value,
                room: room.value,

            }
            sendMessage(messageObject) 
        }

        const filterChat = (room : string) => {
            console.log("filter")
        }

        return {
            room,
            message,
            filteredChat,
        }
    },
})
</script>
<style scoped>

</style>
