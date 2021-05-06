import React from 'react'
import { Nav, VideoCard } from "../../Components/index";
import { useLikedVideos } from "../../Contexts/like-context";
import './likedvideos.css';

export function LikedVideos() {

    const { likedVideos } = useLikedVideos();

    return (
        <>
        <Nav />
        <div className="like-page">
            <div className="like-card">
                {likedVideos.map(video=><VideoCard data={video} />)}
            </div>
        </div>
        </>
    )
}
