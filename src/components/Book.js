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
                    <button className='button' data-toggle="modal" data-target={`#book${book.id}`} ><span>View</span></button>

                    <div className="modal fade" id={`book${book.id}`} role="dialog">
                        <div className="modal-dialog modal-lg ">
                        
                            <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{book.title}</h4>
                            </div>
                            <div className="modal-body">
                                <img src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title}/>
                                <p className="description">{book.description ? book.description : 'No description'}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                            
                        </div>
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