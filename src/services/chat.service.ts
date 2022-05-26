import { useChatState } from "@/store/chat";
import { Chat } from "@/types/types";
import { io } from "socket.io-client";
import { ref } from "vue";

export class ChatService {
  socket = io("localhost:3000");

  constructor() {
    this.socket.connect();
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
  }

  sendMessage(chat: Chat) {
    this.socket.emit("createChat", chat);
  }

  listenToRoom(room: string, chatListener: (chat: Chat) => void) {
    this.socket.on(room, (chat: Chat) => {
      chatListener(chat);
    });
  }

  disconnectFromRoom(room: string) {
    this.socket.off(room);
  }

  getAll(){
    const { chats } = useChatState();
    this.socket.emit("findAllChat", async (data: Chat[]) => {
      console.log(chats.value)
      return chats.value = data
    })
  }

}
