import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
import { BiLike } from "react-icons/bi";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { TiHome } from "react-icons/ti";
// import { IoSearch } from "react-icons/io5";

export function Nav() {
    return (
        <>
        <nav>
            <div className="header">
                <h1>Learn<span className="it">IT</span></h1>
            </div>
            <div className="nav-bar">
                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to='/' className="link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="link">
                                My Playlists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="link">
                                Watch Later
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="link">
                                Liked Videos
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>

                <div>
                    <img src="https://avatars.githubusercontent.com/u/59931129?s=60&v=4" 
                    alt="male-avtar" 
                    className="avtar sm" />
                </div>
            </div>
        </nav>

        <div className="bottom-nav-links">
            <ul>
                <li>
                    <NavLink to='/' className="link">
                    <TiHome className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="link">
                        <BiLike className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="link">
                        <MdVideoLibrary className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="link">
                        <MdWatchLater className="icon" />
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}