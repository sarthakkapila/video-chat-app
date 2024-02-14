import { Socket } from "socket.io"
import { RoomManager } from "./RoomManager";
export interface User {
    name: string
    socket: Socket
}

export class UserManager {
    private users: User[];
    private queue: string[];
    private roomManager: RoomManager;

        constructor() {
            this.users = [];
            this.queue = [];
            this.roomManager = new RoomManager();
    }
}