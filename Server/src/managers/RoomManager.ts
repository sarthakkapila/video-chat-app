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
        user1.socket.emit("send-offer", {
            roomid
        })

        user2.socket.emit("send-offer", {
            roomid
        })
    }

    onOffer(SenderSocketid: string, sdp: string, roomid: string){
        const room = this.rooms.get(roomid);
        if(!roomid){
            return
        }
        const ReceivingUser = (room?.user1.socket.id == SenderSocketid) ? room.user2 : room?.user1

        ReceivingUser?.socket.emit("offer", {
            sdp,
            roomid
        })

    }

    onAnswer(SenderSocketid: string, sdp: string, roomid: string){
        const room = this.rooms.get(roomid);
        if(!roomid){
            return
        }
        const ReceivingUser = (room?.user1.socket.id == SenderSocketid) ? room.user2 : room?.user1

        ReceivingUser?.socket.emit("answer", {
            sdp,
            roomid
        })
    }

    onIceCandidates(roomId: string, senderSocketid: string, candidate: any, type: "sender" | "receiver") {
        const room = this.rooms.get(roomId);
        if (!room) {
            return;
        }
        const receivingUser = room.user1.socket.id === senderSocketid ? room.user2: room.user1;
        receivingUser.socket.emit("add-ice-candidate", ({candidate, type}));
    }

}