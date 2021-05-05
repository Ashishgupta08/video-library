import React from 'react'
import "./assests/home.css"
import { Nav, VideoCard } from "../../Components/index";
import { videoData } from '../../data'

export function Home() {
    return (
        <>
            <Nav />
            {/* <div className="video-page">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div> */}
            <div className="video-page">
                {
                    videoData.map(item => <VideoCard data={item} />)
                }
            </div>
        </>
    )
}
