import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {

    const [searchInput, setSearchInput] = useState()

    const handleInput = (e) => {

        setSearchInput(e.target.value)
    }

    const handleSubmit = (searchInput) => {
        onSearch(searchInput)
    }

    return (

        <div className="search-bar">
            <input
                type="text"
                value={searchInput}
                onChange={handleInput}
            />
            <button onClick={() => handleSubmit(searchInput)}>
                <i className="material-icons">
                    search
                    </i>
            </button>
        </div>
    )
}

export default SearchBar;
