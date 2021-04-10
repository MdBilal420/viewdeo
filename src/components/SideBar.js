import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/sidebar.css"

const l = {
    display: "none"
}

const d = {
    display: "inline",
    position: "fixed",
    top: "4.4rem",
    height: "auto"
}

const SideBar = ({ side }) => {
    return (
        <div className="sidebar" style={side ? l : d}>
            <div className="sidebar-categories">
                <Link to="/" className="category">
                    <i className="material-icons">home</i><span>Home</span>
                </Link>
                <Link to="/subscriptions" className="category">
                    <i className="material-icons">subscriptions</i><span>Subscriptions</span>
                </Link>
                <Link to="playlists" className="category">
                    <i className="material-icons">playlist_add_check</i><span>Playlists</span>
                </Link>
                <Link to="history" className="category">
                    <i className="material-icons">history</i><span>History</span>
                </Link>
                <Link to="likedvideos" className="category">
                    <i className="material-icons">thumb_up</i><span>Liked Videos</span>
                </Link>
            </div>
        </div>
    )
}

export default SideBar
