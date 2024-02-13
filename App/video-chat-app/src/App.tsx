
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Room } from "./components/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
        </Route>
          <Route path="room/:roomid" element={<Room/>} >
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;