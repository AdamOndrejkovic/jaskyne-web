import { ChatService } from "@/services/chat.service";
import { Chat } from "@/types/types";
import { defineStore, storeToRefs } from "pinia";

const chatService = new ChatService();

const useChatStore = defineStore("chat", {
  state: () => ({
    chats: [] as Chat[],
    room: "",
  }),
  getters: {
    getHistory: (state) => {
      return "hello";
    },
  },
  actions: {
    sendMessage(message: Chat) {
      chatService.sendMessage(message);
    },
    receiveChat(message: Chat) {
      this.chats.push(message);
    },
    setRoom(room: string) {
      if (room) chatService.disconnectFromRoom(this.room);
      this.room = room;
      chatService.listenToRoom(room, (message) => {
        this.chats.push(message);
      });
    },
    getChat() {
      chatService.getAll()
    },
  },
});

export const useChatState = () => storeToRefs(useChatStore());

export const useChatGetters = () => storeToRefs(useChatStore());

export const useChatActions = () => useChatStore();

export const clearChatState = () => useChatStore().$reset;
