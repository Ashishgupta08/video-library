import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { LikeProvider } from "./Contexts/like-context";
import { WatchLaterProvider } from "./Contexts/watch-later";
import { PlaylistProvider } from "./Contexts/playlist-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LikeProvider>
      <WatchLaterProvider>
      <PlaylistProvider>
        <App />
      </PlaylistProvider>
      </WatchLaterProvider>
      </LikeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);