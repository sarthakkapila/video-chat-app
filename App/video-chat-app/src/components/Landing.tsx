import { useState } from "react";

export const Landing = () => {
    const [roomid, setRoomid] = useState('')

    return (
        <div>
            <input type="text" value={roomid} onChange={e => setRoomid(e.target.value)} />
            <button onClick={() => {
// modify later
            }}>Join room
            </button>
        </div>
    );
}