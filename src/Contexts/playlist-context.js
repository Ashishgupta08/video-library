import React, { createContext, useContext, useState } from 'react';
import { playlist } from "../data";

const PlaylistContext = createContext();

export function PlaylistProvider({ children }){

    const [playlists, setPlaylists] = useState(playlist)

    return(
        <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export function usePlaylist(){
    return useContext(PlaylistContext)
}