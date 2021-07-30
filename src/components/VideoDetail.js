import React, { useState } from 'react'
import { useVideo } from '../context/video-context'
import Modal from "react-modal"
import "../styles/style.css"
import "../styles/videodetail.css"
import VideoAction from './VideoAction'


Modal.setAppElement("#root")

const modalStyle = {
    content: {
        width: "300px",
        height: "300px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-150px",
        marginTop: "-150px",
        textAlign: "center",
        paddingTop: "40px"
    },
    overlay: {
        opacity: 1,
        background: "transparent",
        borderRadius: "4px"
    }
}

const VideoDetail = ({ video }) => {

    const { dispatch, playlists } = useVideo()
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState()

    const handleModal = () => {
        dispatch({ type: "CREATE_PLAYLIST", payload: { id: Math.random() * 1000, name: text, video: video } })
        setShowModal(false)
    }


    const videoSrc = "https://www.youtube.com/embed/"
    return (
        <div className="video-watch-container">
            {video && <div className="video-detail">
                <iframe className="embed-video" src={videoSrc + video.id} title={video.name} />
                <h3>{video.name}</h3>
                <div className="video-info">
                    <VideoAction video={video} setShowModal={setShowModal} />
                    <h2>{video.uploadedBy}</h2>
                </div>
                <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} style={modalStyle}>
                    <input type="text" onChange={(e) => setText(e.target.value)} placeholder="create new playlist" className="modal-detail-input" />
                    <button onClick={handleModal} className="modal-detail-button">Add</button>
                    {
                        playlists.map((playlist) =>
                            <div key={playlist.id}>
                                <label style={{ fontSize: "1.5rem" }}>
                                    <input
                                        type="checkbox"
                                        onChange={() => dispatch({ type: "ADD_TO_PLAYLIST", payload: { id: playlist.id, video } })}
                                    />
                                    {playlist.name}
                                </label>
                            </div>
                        )
                    }
                </Modal>
            </div>
            }
        </div >
    )
}


export default VideoDetail