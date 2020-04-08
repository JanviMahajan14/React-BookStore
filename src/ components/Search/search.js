import React, {Component} from 'react';
import './search.css';

const Search = () => {
    return(
        <div className="searchArea">
            <form>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;
