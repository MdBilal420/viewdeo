import React from 'react'
import { useVideo } from '../context/video-context'
import "../styles/likedvideos.css"
import VideoDetail from './VideoDetail'

const LikedVideos = () => {

    const { likedVideos } = useVideo()
    console.log(likedVideos)
    return (
        <div className="likedvideos-container">
            <h2>Liked Videos</h2>
            {likedVideos.map((video) => {
                return <div
                    className="liked-video"
                    key={video.id}>
                    <VideoDetail video={video} />
                </div>
            }
            )}
        </div>
    )
}

export default LikedVideos
