import React, { createContext, useContext, useState } from 'react';
import { watchLater as watchIds, videoData } from "../data";

const WatchLaterContext = createContext();

export function WatchLaterProvider({ children }){

    let watchLater = videoData.map(video => {
        return watchIds.filter(item => item === video.id).length !== 0 && video
        })
    const data = watchLater.filter(item=>item !== false)

    const [watchLaterVideos, setWatchLaterVideos] = useState(data)

    return(
        <WatchLaterContext.Provider value={{ watchLaterVideos, setWatchLaterVideos }}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export function useWatchLater(){
    return useContext(WatchLaterContext)
}