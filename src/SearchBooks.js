import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
    static propTypes = {
        booksSearch: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        const { booksSearch, changeShelf, onChange } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={onChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                    <ListBooks
                        books={booksSearch}
                        onChangeShelf={changeShelf}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks