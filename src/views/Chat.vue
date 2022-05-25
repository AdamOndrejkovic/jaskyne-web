<template>
  <div>
    <div class="flex justify-center items-center gap-6">
      <span @click="changeRoom('general')">General</span>
      <span @click="changeRoom('tips')">Tipy</span>
      <span @click="changeRoom('questions')">Otazky</span>
      <span @click="changeRoom('ideas')">Napady</span>
    </div>
    <div>
      <div class="messages">
        <ul>
          <li v-for="message in filteredChat" :key="message.uuid">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="footer">
        <input v-model="message" type="text" />
        <button @click="send">Send</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useChatActions, useChatState } from "@/store/chat";
import { useUserState } from "@/store/user";
import { Chat } from "@/types/types";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const { loggedUser } = useUserState();
    const { chats } = useChatState();
    const { sendMessage, setRoom } = useChatActions();
    const room = ref<string>("general");
    const message = ref<string>("");
    const filteredChat = ref<Chat[]>([]);
    setRoom(room.value);

    const send = () => {
      const messageObject: Chat = {
        uuid: "",
        userId: loggedUser.value?.uuid as string,
        firstName: loggedUser.value?.firstName as string,
        text: message.value,
        room: room.value,
      };
      sendMessage(messageObject);
    };

    const changeRoom = (roomSelected: string) => {
      filterChat(roomSelected);
      room.value = roomSelected;
      setRoom(roomSelected);
    };

    const filterChat = (room: string) => {
      filteredChat.value = chats.value.filter((chat) => chat.room === room);
    };

    return {
      room,
      message,
      filteredChat,
      changeRoom,
      send,
    };
  },
});
</script>
<style scoped>
.messages {
  height: 50vh;
  width: 50vw;
  margin: auto;
  background-color: aqua;
}

input {
  width: 350px;
  background-color: antiquewhite;
}

.footer {
  margin: auto;
  width: 50vw;
  text-align: center;
}
</style>
