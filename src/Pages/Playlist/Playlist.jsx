import React from 'react'
import { Nav, VideoCard } from "../../Components/index";
import { usePlaylist } from "../../Contexts/playlist-context";
import { playlist, videoData } from "../../data";
import './playlist.css';
import { RiDeleteBinFill } from "react-icons/ri"

export function Playlist() {

    const {playlists, setPlaylists} = usePlaylist();

    const deletePlaylist = (id) => {
        setPlaylists(playlist => playlist.filter(item => item.id !== id));
    };

    return (
        <>
        <Nav />
        <div className="playlist-page">
            {
                playlists.map(playlist => {
                    return(
                        <div key={playlist.id} className="playlist">
                            <div className="container">
                                <h1>{playlist.name}</h1>
                                <RiDeleteBinFill className="action-icon" onClick={()=>{deletePlaylist(playlist.id)}}/>
                            </div>
                            <div className="playlist-videos">
                                {
                                    playlist.videos.map(id => {
                                        if(videoData.find(item => item.id === id) !== undefined){
                                            return(
                                                <VideoCard data={videoData.find(item => item.id === id)} />
                                            )
                                        }
                                    }
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div>

            </div>
        </div>
        </>
    )
}
