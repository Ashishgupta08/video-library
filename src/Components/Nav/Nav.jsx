import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
import { BiLike } from "react-icons/bi";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { TiHome } from "react-icons/ti";
//import Logo from './images/learnit-logo.png'
// import { IoSearch } from "react-icons/io5";

export function Nav() {
    return (
        <>
        <nav>
            <div className="header">
                <h1>Learn<span className="it">IT</span></h1>
                {/* <img src={Logo} alt="logo" /> */}
                {/* <svg width="400" height="70" viewBox="0 0 1000 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.344 145.055C97.0469 145.055 92.6406 144.445 89.125 143.227C85.6562 141.961 82.9141 139.969 80.8984 137.25C78.8828 134.531 77.4766 131.297 76.6797 127.547C75.8828 123.797 75.4844 119.133 75.4844 113.555V38.25L93.9062 37.0547V113.203C93.9062 120.141 94.7266 124.852 96.3672 127.336C98.0078 129.773 101.195 130.992 105.93 130.992C108.273 130.992 111.25 130.734 114.859 130.219L115.352 143.367C115.305 143.367 114.719 143.484 113.594 143.719C112.516 143.953 111.461 144.141 110.43 144.281C109.445 144.469 108.18 144.633 106.633 144.773C105.086 144.961 103.656 145.055 102.344 145.055ZM159.789 145.477C147.367 145.477 137.688 141.914 130.75 134.789C123.859 127.617 120.414 117.727 120.414 105.117C120.414 92.8359 123.672 83.0625 130.188 75.7969C136.703 68.5312 145.586 64.875 156.836 64.8281C167.477 64.8281 175.727 68.1562 181.586 74.8125C187.492 81.4688 190.445 90.3047 190.445 101.32C190.445 102.117 190.422 103.406 190.375 105.188C190.375 106.969 190.375 108.281 190.375 109.125H138.977C139.164 116.344 141.133 121.945 144.883 125.93C148.68 129.867 153.883 131.836 160.492 131.836C168.93 131.836 177.039 129.633 184.82 125.227L187.422 138.305C179.688 143.086 170.477 145.477 159.789 145.477ZM139.328 97.5234H173.078C173.078 91.2422 171.648 86.4141 168.789 83.0391C165.93 79.6641 161.969 77.9766 156.906 77.9766C152.172 77.9766 148.164 79.6172 144.883 82.8984C141.648 86.1797 139.797 91.0547 139.328 97.5234ZM225.602 145.477C218.43 145.477 212.617 143.508 208.164 139.57C203.758 135.586 201.555 129.867 201.555 122.414C201.555 114.398 204.18 108.469 209.43 104.625C214.68 100.734 222.602 98.2734 233.195 97.2422C234.648 97.0547 236.219 96.8672 237.906 96.6797C239.594 96.4922 241.492 96.3047 243.602 96.1172C245.711 95.9297 247.375 95.7656 248.594 95.625V91.5469C248.594 86.8594 247.516 83.4609 245.359 81.3516C243.203 79.1953 239.922 78.1172 235.516 78.1172C229.234 78.1172 221.477 79.875 212.242 83.3906C212.195 83.25 211.422 81.1172 209.922 76.9922C208.422 72.8672 207.648 70.7578 207.602 70.6641C216.695 66.7734 226.539 64.8281 237.133 64.8281C247.539 64.8281 255.109 67.1016 259.844 71.6484C264.578 76.1484 266.945 83.4609 266.945 93.5859V144H253.305C253.258 143.812 252.742 142.242 251.758 139.289C250.773 136.336 250.281 134.766 250.281 134.578C246.438 138.328 242.664 141.094 238.961 142.875C235.305 144.609 230.852 145.477 225.602 145.477ZM230.594 132.398C234.859 132.398 238.562 131.391 241.703 129.375C244.891 127.312 247.164 124.828 248.523 121.922V107.016C248.383 107.016 247.141 107.109 244.797 107.297C242.5 107.484 241.258 107.578 241.07 107.578C233.617 108.234 228.156 109.641 224.688 111.797C221.219 113.953 219.484 117.422 219.484 122.203C219.484 125.484 220.445 128.016 222.367 129.797C224.289 131.531 227.031 132.398 230.594 132.398ZM285.578 144V66.7266H301.047L303.438 78.5391C308.5 70.4297 315.836 66.375 325.445 66.375C327.461 66.375 329.102 66.4688 330.367 66.6562L330.086 82.0547C328.211 81.7734 326.266 81.6328 324.25 81.6328C317.453 81.6328 312.367 83.4375 308.992 87.0469C305.664 90.6562 304 95.6719 304 102.094V144H285.578ZM341.617 144V66.7266H356.453L358.492 76.5C366.367 68.7188 375.109 64.8281 384.719 64.8281C393.719 64.8281 400.445 67.4297 404.898 72.6328C409.398 77.7891 411.648 85.2891 411.648 95.1328V144H393.156V97.3828C393.109 91.1484 392.102 86.4844 390.133 83.3906C388.164 80.2969 384.625 78.75 379.516 78.75C375.531 78.75 371.875 79.7812 368.547 81.8438C365.266 83.8594 362.875 86.4141 361.375 89.5078C360.484 93.1641 360.039 98.7891 360.039 106.383V144H341.617ZM430.211 144V66.7266H448.633V144H430.211ZM430.211 55.4766V39.7266H448.703V55.4766H430.211ZM498.766 145.055C493.516 145.055 489.133 144.445 485.617 143.227C482.148 141.961 479.43 139.992 477.461 137.32C475.492 134.648 474.086 131.508 473.242 127.898C472.445 124.242 472.047 119.742 472.047 114.398V77.9062H459.391L460.094 67.9219L473.312 66.7266L479.219 45.7734L490.469 45.7031V66.7266H509.664V77.9062H490.469V114.75C490.469 120.609 491.312 124.781 493 127.266C494.688 129.75 497.805 130.992 502.352 130.992C505.023 130.992 507.883 130.758 510.93 130.289L511.422 143.508C511.328 143.508 510.742 143.625 509.664 143.859C508.633 144.047 507.625 144.211 506.641 144.352C505.703 144.539 504.484 144.703 502.984 144.844C501.484 144.984 500.078 145.055 498.766 145.055Z" fill="#08BD80"/>
                    <ellipse cx="438.5" cy="48.484" rx="12.5" ry="11.7855" fill="#EBEBF5"/>
                    <path d="M430 65.9686C433.5 67.9535 442.2 70.7324 449 65.9686H430Z" fill="#131417" stroke="#131417"/>
                </svg> */}
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
                            <NavLink to='/playlists' className="link">
                                My Playlists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/watchlater' className="link">
                                Watch Later
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/likedvideos' className="link">
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
                    <NavLink to='/likedvideos' className="link">
                        <BiLike className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/playlists' className="link">
                        <MdVideoLibrary className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/watchlater' className="link">
                        <MdWatchLater className="icon" />
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}