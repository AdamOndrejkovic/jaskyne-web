<template>
  <div class="chat-box">
    <div class="flex justify-center items-center gap-6 py-3">
      <span @click="changeRoom('general')" class="room" :class="room === 'general' ? 'active' : ''">General</span>
      <span @click="changeRoom('tips')" class="room" :class="room === 'tips' ? 'active' : ''">Tipy</span>
      <span @click="changeRoom('questions')" class="room" :class="room === 'questions' ? 'active' : ''">Otazky</span>
      <span @click="changeRoom('ideas')" class="room" :class="room === 'ideas' ? 'active' : ''">Napady</span>
    </div>
    <div>
      <div class="messages">
        <ul>
          <li v-for="message in filteredChat" :key="message.uuid">
            <div class="message" :class="message.userId === loggedUser?.uuid ? 'left': 'right' ">
              <p class="name">{{ message.firstName }}</p>
              <span>
                {{ message.text}}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <input v-model="message" type="text" max="100"/>
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
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  beforeMount() {
    const { getChat } = useChatActions();
    const { loggedUser } = useUserState();
    const route = useRoute;
    const router = useRouter();
    getChat()

    if(!loggedUser.value){
      router.push(`/authenticate`);
    }
  },
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
      filteredChat.value.push(messageObject)
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

    filterChat(room.value)

    return {
      room,
      message,
      filteredChat,
      changeRoom,
      send,
      loggedUser,
    };
  },
});
</script>
<style scoped>
.chat-box {
  min-height: 75vh;
  position: relative;
}

.messages {
  @apply  mx-auto w-full lg:w-1/2 overflow-y-auto;
  height: 60vh;
  background-color: aquamarine;
}

input {
  @apply w-2/3 rounded py-2 px-4 bg-gray-500 mx-4
}

.footer {
  @apply  mx-auto w-full lg:w-1/2;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%)
}

.footer button {
  @apply py-2 px-4 mx-4 bg-brand-500 rounded text-white hover:text-green-300
}

.room {
  @apply px-4 text-lg;
  font-family: 'Permanent Marker', cursive;

}

.active {
  @apply border-r-2 border-l-2 text-green-500;
  border-color: rgb(119, 185, 128) ;
}

.messages ul li {
  @apply py-6 px-8;
}

.message {
  max-width: 70%;
}

.left {
  margin-left: 0; 
  margin-right: auto;
  text-align: left;
}

.left p {
  @apply text-lg -mb-1 ml-2;
  z-index: 3;
  position:relative
}

.left span {
  @apply px-8 py-2 rounded;
  background-color: aquamarine;
  text-align: left;
}

.right {
  margin-left: auto; 
  margin-right: 0;
  text-align: right;
}

.right p {
  @apply text-lg -mb-1 mr-2;
  z-index: 3;
  position:relative
}

.right span {
  @apply px-8 py-2 rounded;
  background-color: aquamarine;
  text-align: left;
}
</style>
