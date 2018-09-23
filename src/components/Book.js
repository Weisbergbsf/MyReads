import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {


    render() {
        let books = this.props.books.map((book) => {
            return (
                <li key={book.id}>
                    <div className="book" id={book.id}>
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,
                                 backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf ? book.shelf : 'move'} 
                                        onChange={(event) => this.props.changeBookShelf(book, event.target.value)}
                                        >
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            );
        })
        return (
          <div>
          <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books}
                  </ol>
              </div>
          </div>
      </div>
        );
    }
}

Book.propTypes = {
    books: PropTypes.array,
    changeBookShelf: PropTypes.func
}