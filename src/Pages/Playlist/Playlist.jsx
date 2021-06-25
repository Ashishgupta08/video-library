import React from 'react'
import axios from 'axios'
import { Nav, VideoCard } from "../../Components/index";
import { useAuth, usePlaylist } from "../../Contexts";
import './playlist.css';
import { BsTrash } from "react-icons/bs"
import { NavLink } from 'react-router-dom';

export function Playlist() {

    const { playlistState, playlistDispatch } = usePlaylist();
    const { authState } = useAuth();

    const deletePlaylist = async (id) => {
        try{
            if(authState.isUserLoggedIn){
                const { data: { result } } = await axios.delete("https://video-library-backend.ashishgupta08.repl.co/playlist", { headers: { Authorization: authState.token }, data: { playlistId: id } });
                playlistDispatch({ type: "DELETE-PLAYLIST", payload: id });
            }else{
                console.log("Login to proceed.")
            }
        }catch(e){
            console.log(e.message);
        }
    };

    return (
        <>
            <Nav />
            <div className="playlist-page">
                {
                    playlistState.playlist.map(playlist => {
                        return (
                            <div key={playlist._id} className="playlist">
                                <div className="container">
                                    <h1 className="playlist-name">{playlist.playlistName}</h1>
                                    <BsTrash className="trash-icon" onClick={() => { deletePlaylist(playlist._id) }} />
                                </div>
                                <div className="playlist-videos">
                                    {
                                        playlist.videos.map(video => {
                                            return (
                                                <VideoCard data={video} key={video.videoId} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {
                    playlistState.playlist.length === 0 &&
                    <div className="add-video" style={{paddingTop: "2.5rem"}}>
                        <h2>You don't have any playlist.</h2>
                        <h3><NavLink to='/' className="sign-up">Explore</NavLink> and create some.</h3>
                    </div>
                }
            </div>
        </>
    )
}
