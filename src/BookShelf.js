import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks';

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const { title, books, onChangeShelf } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ListBooks
                        books={books}
                        onChangeShelf={onChangeShelf}
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf