import { Chat } from "@/types/types";
import { io } from "socket.io-client";

export class ChatService {
    socket = io("localhost:3000")

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
}