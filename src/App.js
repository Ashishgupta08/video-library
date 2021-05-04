import './App.css';
import { Home, Playlist } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/playlist' element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;