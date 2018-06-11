import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { search } from './BooksAPI';

class ListBookShelves extends Component {
    static propTypes = {
        booksCurrentlyReading: PropTypes.array.isRequired,
        booksWantToRead: PropTypes.array.isRequired,
        booksRead: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        search: PropTypes.func.isRequired
    }

    render() {
        const { booksCurrentlyReading, booksWantToRead, booksRead, changeShelf } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Currently Reading"
                            books={booksCurrentlyReading}
                            onChangeShelf={changeShelf}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={booksWantToRead}
                            onChangeShelf={changeShelf}
                        />
                        <BookShelf
                            title="Read"
                            books={booksRead}
                            onChangeShelf={changeShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        onClick={search}
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBookShelves