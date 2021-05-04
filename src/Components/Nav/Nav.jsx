import React from 'react'
import './assests/nav.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome, AiOutlineHeart, AiOutlineShopping, AiOutlineUser} from "react-icons/ai";
import { MdVideoLibrary, MdWatchLater, MdSearch } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";

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
                                Search
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
                        <IoSearch className="icon" />
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