import React, { Fragment } from 'react'
import { useVideo } from '../context/video-context'
import "../styles/playlist.css"
import VideoItem from './VideoItem'


const Playlist = ({ selectVideo }) => {

    const { playlists, dispatch } = useVideo()

    return (
        <div className="playlist-container">
            <h1>Playlists</h1>
            {playlists.map((playlist) => <Fragment key={playlist.id}>
                {playlist.name === "Watch Later" ? <h2>Watch Later</h2>
                    : <span className="playlists-title"
                        onClick={() => dispatch({ type: "REMOVE_PLAYLIST", payload: playlist })}>
                        <h2>{playlist.name}</h2> <i className="material-icons">delete</i></span>
                }

                <div className="playlist-list">
                    {playlist.list.map((video) => (
                        <Fragment key={video.id}>
                            <VideoItem selectVideo={selectVideo} video={video} />
                            { <span
                                style={{ cursor: "pointer" }}
                                onClick={() => dispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST", payload: { playlist, video } })}
                            >
                                <i className="material-icons">clear</i>
                            </span>}
                        </Fragment>
                    ))}
                </div>
            </Fragment>
            )}

        </div>
    )
}

export default Playlist
