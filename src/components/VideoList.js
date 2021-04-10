import React, { Fragment } from 'react'
import VideoItem from './VideoItem'
import "../styles/style.css"
import "../styles/videolist.css"

const VideoList = ({ videos, selectVideo }) => {
    return (
        <div className="video-list">
            <div className="video-container">
                {videos.map((video) => (
                    <Fragment key={video.id}>
                        <VideoItem selectVideo={selectVideo} video={video} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}


export default VideoList;