import { Socket } from "socket.io"

export interface User {
    name: string
    socket: Socket
}

export class UserManager {
    private users: Map<string, User>
    constructor() {
        this.users = new Map<string, User>()
    }
}