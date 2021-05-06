import './App.css';
import { Home, Playlist, LikedVideos, WatchLater, VideoPlayer } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/likedvideos' element={<LikedVideos />}></Route>
        <Route path='/playlists' element={<Playlist />}></Route>
        <Route path='/watchlater' element={<WatchLater />}></Route>
        <Route path='/watch/:id' element={<VideoPlayer />}></Route>
      </Routes>
    </div>
  );
}

export default App;