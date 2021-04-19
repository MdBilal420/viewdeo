import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/videoitem.css"

const VideoItem = ({ video, selectVideo }) => {

    return (
        <Link to={`/watch/${video.id}`} className="video" onClick={() => selectVideo(video)}>
            <div className="video-thumbnail">
                <img src={video.thumbnail} alt="" />
            </div>
            <div className="video-details">
                <h4>{video.name}</h4>
            </div>

        </Link >
    )
}


export default VideoItem