import React from 'react'
import ReactPlayer from "react-player";
import './videocard.css'

export function VideoCard(props) {

    const { data } = props;

    return (
        <div className="card">
            <ReactPlayer 
                url={data.url}
                controls='true' 
                className='player'
            />
            <div className="card-text">
                <p className="card-primary-text">{data.title}</p>
                <p className="card-secondary-text">{data.views} views <b>·</b> {data.uploadDate}</p>
            </div>
        </div>
    )
}