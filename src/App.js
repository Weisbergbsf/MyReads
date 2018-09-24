import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

class BooksApp extends Component {
  state = {
    books: [],
    booksSearched: []
  };

  componentDidMount() {
    this.getBooksShelf()
  }

  getBooksShelf() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.getBooksShelf();
    });
  };

  searchBook = query => {
    if (query.length > 1) {
      BooksAPI.search(query).then(response => {
        if(response && response.length) {
        const res = response.map(obj => this.state.books.find(o => o.id === obj.id) || obj);

        this.setState({ booksSearched: res });
        
        if (res.error) {
          this.setState({ booksSearched: [] });
        }
      }
      });
    } else {
      this.setState({ booksSearched: [] });
    }
  };

  handleUserInput(searchItem) {
    this.setState({ filterText: searchItem });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ListBooks
                  books={this.state.books}
                  changeBookShelf={this.changeBookShelf}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  books={this.state.booksSearched}
                  searchBook={this.searchBook}
                  changeBookShelf={this.changeBookShelf}
                />
              )}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
