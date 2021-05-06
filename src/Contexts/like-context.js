import React, { createContext, useContext, useState } from 'react';
import { likedVideos as likedIds, videoData } from "../data";

const LikedVideosContext = createContext();

export function LikeProvider({ children }){

    let liked = videoData.map(video => {
        return likedIds.filter(item => item === video.id).length !== 0 && video
        })
    const data = liked.filter(item=>item !== false)

    const [likedVideos, setLikedVideos] = useState(data)
    console.log(likedVideos);
    return(
        <LikedVideosContext.Provider value={{ likedVideos, setLikedVideos }}>
            {children}
        </LikedVideosContext.Provider>
    )
}

export function useLikedVideos(){
    return useContext(LikedVideosContext)
}