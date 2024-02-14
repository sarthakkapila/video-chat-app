import { User } from "./UserManager";

interface Room{
    user1: User
    user2: User
}   

export class RoomManager {
    private rooms: Map<string, Room>
    constructor() {
        this.rooms = new Map<string, Room>()
    }

    createRoom(user1:User, user2:User){
        const roomid = Math.random().toString(36).substring(7);
        
        this.rooms.set(roomid, {
            user1,
            user2
        })
    }
}