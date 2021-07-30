import React from 'react'
import { useVideo } from '../context/video-context'

const VideoAction = ({ video, setShowModal }) => {

    const { dispatch, likedVideos, subscriptions } = useVideo()

    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            {
                likedVideos.find((vid) => vid.id === video.id) ?
                    <span
                        style={{ marginTop: "2rem" }}
                        onClick={() => dispatch({ type: "ADD_TO_UNLIKE", payload: video })}>
                        <i className="material-icons">thumb_down</i>Unlike
                    </span>
                    :
                    <span
                        style={{ marginTop: "2rem" }}
                        onClick={() => dispatch({ type: "ADD_TO_LIKE", payload: video })}>
                        <i className="material-icons">thumb_up</i>Like
                    </span>
            }
            <span style={{ cursor: "pointer", marginTop: "2rem" }}>
                <i className="material-icons"
                    onClick={() => setShowModal(true)}>
                    playlist_add
            </i> Add to Playlist
            </span>

            {
                subscriptions.find((vid) => vid.id === video.id) ?
                    <button className="btn-danger" onClick={() => dispatch({ type: "ADD_TO_SUBSCRIBE", payload: video })}>Unsubscribe</button>
                    :
                    <button className="btn-primary" onClick={() => dispatch({ type: "ADD_TO_SUBSCRIBE", payload: video })}>Subscribe</button>
            }

        </div>
    )
}

export default VideoAction
