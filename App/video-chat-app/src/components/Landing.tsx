import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
    const [joined, setJoined] = useState(false);
    const [name, setName] = useState('')

    return (
        <>
        <div>
        <input type="text" onChange={(e) => {
                setName(e.target.value);
            }}>
            </input>
            <button onClick={() => {
                setJoined(true);
            }}>Join</button>
        </div>
        </>
    );
}