import React, {Component} from 'react';
import './search.css';

const Search = ({handleSearch, searchBook}) => {
    return(
        <div className="searchArea">
            <form onSubmit={searchBook}>
                <input type="text" onChange={handleSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;
