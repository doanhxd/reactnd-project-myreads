import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class BookShelf extends Component {
    static propTypes = {
        onUpdateShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }
    render() {
        const { onUpdateShelf, book } = this.props

        return (
            <div className="book-shelf-changer">
                <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={ book.shelf }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelf;