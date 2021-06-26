import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'
import { LikeProvider, SavedVideosProvider, PlaylistProvider, VideosProvider, AuthProvider } from "./Contexts/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <AuthProvider>
          <LikeProvider>
            <SavedVideosProvider>
              <PlaylistProvider>
                <SnackbarProvider>
                  <App />
                </SnackbarProvider>
              </PlaylistProvider>
            </SavedVideosProvider>
          </LikeProvider>
        </AuthProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);