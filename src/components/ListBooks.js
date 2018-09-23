import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './Book';

export default class ListBooks extends Component {

    render() {

        return (
          <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">

              <Book nameShelf="currentlyReading" changeBookShelf={this.props.changeBookShelf} shelfTitle="Currently Reading" books={this.props.books.filter((book) => book.shelf === "currentlyReading")}/>
              <Book nameShelf="wantToRead" changeBookShelf={this.props.changeBookShelf} shelfTitle="Want to Read" books={this.props.books.filter((book) => book.shelf === "wantToRead")}/>
              <Book nameShelf="read" changeBookShelf={this.props.changeBookShelf} shelfTitle="Read" books={this.props.books.filter((book) => book.shelf === "read")}/>

          </div>
          <div className="open-search">
              <Link to='/search'>Add a book</Link>
          </div>
      </div>
        );
    }
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func
}