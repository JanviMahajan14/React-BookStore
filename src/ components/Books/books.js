import React, {Component} from 'react';
import Search from '../Search/search';
import axios from 'axios';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchField:'',
            books:[]
        }
    }

    handleSearch = (e) => {
        this.setState({searchField:e.target.value})
    }

    searchBook = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+ this.state.searchField +':keyes&key=AIzaSyBwCTlc7ftvko0iELCtUuOv2SycNcGhgKY');
            this.setState({books:[...response.data.items]})
        } catch (error) {
            console.error(error);
          }
    }

    render(){
        return(
            <div>
            <Search handleSearch={this.handleSearch} searchBook={this.searchBook}/>
            </div>
        )
    }
}

export default Books;