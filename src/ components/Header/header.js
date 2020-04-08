import React, {Component} from 'react';
import './header.css';

const Header = () => {
    return(
        <header>
            <div>
                <i className="fa fa-book fa-3x" aria-hidden="true"></i>
                <h1>BookStore</h1>
            </div>
        </header>
    )
}

export default Header;