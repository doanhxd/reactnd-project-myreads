import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'

import * as BooksAPI from './api/BooksAPI.jsx';
import Main from './components/Main';
import SearchBook from './components/SearchBook';

class App extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({books}))
        })
    }
    render() {
        // Update shelf
        const onUpdateShelf = (book, shelf) => {  
            BooksAPI.update(book, shelf)
            .then((res) => {
                book.shelf = shelf
                this.setState((currentState) => ({
                    books: currentState.books.filter((e) => {
                    return e.id !== book.id
                    }).concat([book])
                }))
            })
        }

        return (
            <Routes>
                <Route exact path="/" element={
                    <Main 
                        books={this.state.books}
                        onUpdateShelf={onUpdateShelf}
                    />
                }/>
                <Route path="/search" element={
                    <SearchBook
                        books={this.state.books}
                        onUpdateShelf={onUpdateShelf}
                    />
                }/>
            </Routes>
        );
    }
}

export default App;