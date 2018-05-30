import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelves from './ListBookShelves';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearch: []
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

  search = (key, query) => {
    if(key === 'Enter'){
      BooksAPI.search(query).then((result) => {
        const self = this
        let booksSearch = result.error ? [] : result
        booksSearch = booksSearch.map(
          function(book) {
            const tempBook = self.state.books.filter((b) => b.id === book.id)

            return tempBook.length === 0 ? book : tempBook[0]
          }
        )

        this.setState({ booksSearch })
      })
    }
  }

  render() {
    const { books, booksSearch } = this.state

    const booksCurrentlyReading = books.filter((book) => book.shelf === 'currentlyReading')

    const booksWantToRead = books.filter((book) => book.shelf === 'wantToRead')

    const booksRead = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBookShelves
            booksCurrentlyReading={booksCurrentlyReading}
            booksWantToRead={booksWantToRead}
            booksRead={booksRead}
            changeShelf={this.changeShelf}
          />
        )}
        />

        <Route path="/search" render={({ history }) => (
          <SearchBooks
            booksSearch={booksSearch}
            changeShelf={this.changeShelf}
            onKeyUp={(event) => this.search(event.key, event.target.value)}
          />
        )}
        />

      </div>
    )
  }
}

export default BooksApp
