import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

const Home = (props) => {
    const {books, onUpdateShelf} = props;
    // Filter list Currently Books
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const lstCurrentlyBooks = currentlyReadingBooks.map(book => {
        return (
            <Book key={book.id} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    // Filter list Read Books
    const readBooks = books.filter(book => book.shelf === 'read');
    const lstReadBooks = readBooks.map(book => {
        return (
            <Book key={book.title} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    // Filter list Want To Read Books
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const lstWantToReadBooks = wantToReadBooks.map(book => {
        return (
            <Book key={book.title} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            {
                                lstCurrentlyBooks.length > 0 &&
                                (<ol className="books-grid">
                                    {lstCurrentlyBooks}
                                </ol>)
                            }
                            {
                                lstCurrentlyBooks.length === 0 &&
                                <div>No books on the currently bookshelf.</div>
                            }
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            {
                                lstReadBooks.length > 0 &&
                                (<ol className="books-grid">
                                    {lstReadBooks}
                                </ol>)
                            }
                            {
                                lstReadBooks.length === 0 &&
                                <div>No books on the read bookshelf.</div>
                            }
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want To Read</h2>
                        <div className="bookshelf-books">
                            {
                                lstWantToReadBooks.length > 0 &&
                                (<ol className="books-grid">
                                    {lstWantToReadBooks}
                                </ol>)
                            }
                            {
                                lstWantToReadBooks.length === 0 &&
                                <div>No books on the want to read bookshelf.</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            
            </div>
        </div>
    );
}

export default Home;