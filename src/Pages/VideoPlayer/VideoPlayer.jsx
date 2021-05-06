import React from 'react'
import { useState, useEffect } from "react";
import { Nav } from "../../Components/index";
import './videoplayer.css'
import ReactPlayer from "react-player"
import { useParams } from 'react-router-dom'
import { videoData } from '../../data'
import { BiLike } from "react-icons/bi";
import { MdLibraryAdd, MdWatchLater } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useLikedVideos } from "../../Contexts/like-context";
import { useWatchLater } from "../../Contexts/watch-later";

export function VideoPlayer() {

    const { likedVideos, setLikedVideos } = useLikedVideos();
    const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();
    const [desc, setDesc] = useState(true);
    const [like, setLike] = useState("action-icon notLiked");
    const [video, setVideo] = useState({});
    const [watchLater, setWatchLater] = useState("action-icon notLiked");
    const { id } = useParams();
    

    const addToLike = (video) => {
        if(likedVideos.some(item => item.id === video.id)){
            setLikedVideos(likedVideos => likedVideos.filter(element => element.id !== video.id));
            setLike("action-icon");
            console.log("Removed from Wishlist");
        }else{
            setLikedVideos(likedVideos => [...likedVideos, video]);
            setLike("action-icon liked");
        }
    };

    const addToWatchLater = (video) => {
        if(watchLaterVideos.some(item => item.id === video.id)){
            setWatchLaterVideos(watchLater => watchLater.filter(element => element.id !== video.id));
            setWatchLater("action-icon");
            console.log("Removed from WatchLater");
        }else{
            setWatchLaterVideos(watchLater => [...watchLater, video]);
            setWatchLater("action-icon liked");
        }
    };

    const addToPlaylist = (id) => {

    }

    useEffect(() => {
        setVideo(videoData.find(item => item.id === id));
        if(likedVideos.find(item => item.id === id)){
            setLike("action-icon liked")
        }
        if(watchLaterVideos.find(item => item.id === id)){
            setWatchLater("action-icon liked");
        }
    }, [])

    return (
        <>
            <Nav />
            <div className="player-page">
                <div className="player-card">
                    <ReactPlayer
                        url={video.url}
                        controls='true'
                        playing='true'
                        className="media-player"
                    />
                    <div className="card-text">
                        <p className="card-primary-text">{video.title}</p>
                        <p className="card-secondary-text">{video.views} views <b>·</b>{video.uploadDate}</p>
                        <div className="actions">
                            <BiLike className={like} onClick={()=>{addToLike(video)}} />
                            <MdLibraryAdd className="action-icon" />
                            <MdWatchLater className={watchLater} onClick={()=>{addToWatchLater(video)}} />
                        </div>
                        <div className="desc">
                            <p>Description</p>
                            { desc === false && <IoIosArrowDown className="action-icon" onClick={()=>setDesc(true)} />}
                            { desc === true && <IoIosArrowUp className="action-icon" onClick={()=>setDesc(false)} />}
                        </div>
                        { desc === true && <div className="desc-content">
                            <p>{video.description}</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}