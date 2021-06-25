import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useAuth } from "./authContext";
import { likeReducer } from "../Reducers";

const LikedVideosContext = createContext();

export function LikeProvider({ children }){

    const [likeState, likeDispatch] = useReducer(likeReducer, { likedVideos: [] })
    const { authState } = useAuth();

    useEffect(()=>{
        (async function(){
            const { data: { result } } = await axios.get("https://video-library-backend.ashishgupta08.repl.co/likedVideos", { headers: { Authorization: authState.token } });
            likeDispatch({ type: "LOAD", payload: result })
        })()
    },[authState])

    return(
        <LikedVideosContext.Provider value={{ likeState, likeDispatch }}>
            {children}
        </LikedVideosContext.Provider>
    )
}

export function useLikedVideos(){
    return useContext(LikedVideosContext)
}