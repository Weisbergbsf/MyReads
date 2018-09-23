import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

export default class Search extends Component {

    searchBook = (query) => {
        this.props.searchBook(query.trim());
    }

    componentWillUnmount(){
        this.props.searchBook("");
    }

    render() {
        return ( 
        <div className = "search-books">
            <div className = "search-books-bar">
                <Link className = "close-search" to = "/"> Close </Link> 
                    <div className = "search-books-input-wrapper" >
                    <input type = "text"
                    placeholder = "Search by title or author"
                    
                    onChange = {(event) => this.searchBook(event.target.value) }/>
                </div> 
            </div> 
            <div className = "search-books-results">
                
                <ol className = "books-grid">
                    {this.props.books.length > 0 && (
                        <Book  books={this.props.books} changeBookShelf={this.props.changeBookShelf}/>
                    )}

                    {this.props.books.length < 1 && (
                        <h1>No books found</h1>
                    )}
                    
                </ol>
            </div>
        </div>
        );
    }
}

Search.propTypes = {
    books: PropTypes.array,
    query: PropTypes.string

}