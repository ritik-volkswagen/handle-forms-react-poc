import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]
        setBooks(updatedBooks);
        // console.log('Need to create book with :', title);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }

            return book;
        })
        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App