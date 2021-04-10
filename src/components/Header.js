import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"
import SearchBar from './SearchBar'



const Header = ({ onSearch, toggle }) => {


    return (
        <div className="header">
            <div className="header-left" >
                <i className="material-icons" onClick={() => toggle()}>menu</i>
                <Link to="/" style={{ textDecoration: "none", color: "rgb(66,66,66)" }}>
                    <label style={{ cursor: 'pointer' }}>Viewdeo</label>
                </Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <div className="header-icons">
                <Link to="/playlists">
                    <i className="material-icons">
                        playlist_add_check
                </i>
                </Link>
                <Link to="history">
                    <i className="material-icons">
                        history
                </i>
                </Link>

                <Link to="/likedvideos">
                    <i className="material-icons">
                        thumb_up
                </i>
                </Link>

            </div>
        </div>
    )
}


export default Header;