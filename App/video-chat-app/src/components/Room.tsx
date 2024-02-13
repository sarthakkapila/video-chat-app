import { useParams } from "react-router-dom";

export const Room = () => {
    const { roomid } = useParams()
    const handleRoomCreation = () => {
        // add later
    }
   return (
        <div>
            <h1>Room ID: {roomid}</h1>
        </div>
    );
    }

