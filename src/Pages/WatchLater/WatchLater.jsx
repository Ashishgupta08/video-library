import React from 'react'
import { Nav, VideoCard } from "../../Components/index";
import { useWatchLater } from "../../Contexts/watch-later";
import './watchlater.css';

export function WatchLater() {

    const { watchLaterVideos } = useWatchLater();

    return (
        <>
            <Nav />
            <div className="watch-page">
                <div className="watch-card">
                    {watchLaterVideos.map(video=><VideoCard data={video} />)}
                </div>
            </div>
        </>
    )
}
