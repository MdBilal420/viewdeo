import React, { Fragment } from 'react'
import { useVideo } from '../context/video-context'
import "../styles/likedvideos.css"
// import VideoDetail from './VideoDetail'
import VideoItem from './VideoItem'

const LikedVideos = ({ selectVideo }) => {

    const { likedVideos } = useVideo()

    return (
        <div className="likedvideos-container">
            <h2>Liked Videos</h2>
            <div className="liked-video-list">
                {likedVideos.length === 0 ? <h1>0 liked videos</h1> : likedVideos.map((likedVideo) => (
                    <Fragment key={likedVideo.id}>
                        <VideoItem selectVideo={selectVideo} video={likedVideo} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default LikedVideos
