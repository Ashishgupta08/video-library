import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { LikeProvider, WatchLaterProvider, PlaylistProvider } from "./Contexts/index";

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