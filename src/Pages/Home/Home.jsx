import React from 'react'
import "./home.css"
import { Nav, VideoCard } from "../../Components/index";
import { videoData } from '../../data'

export function Home() {
    return (
        <>
            <Nav />
            <div className="video-page">
                {
                    videoData.map(item => <VideoCard data={item} key={item.id} />)
                }
            </div>
        </>
    )
}
