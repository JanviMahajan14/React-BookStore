import React, {Component} from 'react';
import BookCard from '../BookCard/bookcard';
import './booklist.css';

const BookList = ({books}) => {
    return(
        <div className="list">
            {
                books.map((book,i)=>{
                   return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                    />
                })

               
            }
        </div>
    )
}

export default BookList;
