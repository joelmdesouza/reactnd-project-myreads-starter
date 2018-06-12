import React from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks';

const BookShelf = ({title, books, onChangeShelf}) => {
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

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf