import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home, Playlist, LikedVideos, SavedVideos, VideoPlayer, Login, Signup } from "./Pages";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/watch/:id' element={<VideoPlayer />} />
        <PrivateRoute path='/likedvideos' element={<LikedVideos />} />
        <PrivateRoute path='/playlists' element={<Playlist />} />
        <PrivateRoute path='/savedvideos' element={<SavedVideos />} />
      </Routes>
    </div>
  );
}

export default App;