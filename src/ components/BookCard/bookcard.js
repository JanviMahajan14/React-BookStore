import React, {Component} from 'react';
import './bookcard.css';

const BookCard = ({image, title, author, published}) => {
    return(
        <div>
            <img src={image}/>
            <div>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{published}</p>
            </div>
        </div>
    )
}

export default BookCard;
