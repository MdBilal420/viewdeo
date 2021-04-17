import React, { Fragment } from 'react'
import { useVideo } from '../context/video-context'
import "../styles/playlist.css"
import VideoItem from './VideoItem'


const Playlist = ({ selectVideo }) => {

    const { playlists } = useVideo()
    // console.log(playlists)
    return (
        <div className="playlist-container">
            <h1>Playlists</h1>
            {playlists.map((playlist) => <Fragment key={playlist.id}>
                <h2>{playlist.name}</h2>
                <div className="playlist-list">
                    {playlist.list.map((video) => (
                        <Fragment key={video.id}>
                            <VideoItem selectVideo={selectVideo} video={video} />
                        </Fragment>
                    ))}
                </div>
            </Fragment>
            )}

        </div>
    )
}

export default Playlist
