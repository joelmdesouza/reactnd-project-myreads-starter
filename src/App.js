import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    let books = this.state.books.filter((b) => b !== book)
    book.shelf = shelf
    books.push(book)

    this.setState((state) => ({
      books: books
    }))

    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state

    let booksCurrentlyReading = books.filter((book) => book.shelf === 'currentlyReading')

    let booksWantToRead = books.filter((book) => book.shelf === 'wantToRead')

    let booksRead = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={booksCurrentlyReading}
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Want to Read"
                  books={booksWantToRead}
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Read"
                  books={booksRead}
                  onChangeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}
        />

        <Route path="/search" render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search"
              >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}
        />

      </div>
    )
  }
}

export default BooksApp
