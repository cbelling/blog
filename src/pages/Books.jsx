import React from 'react'
import { Link } from 'react-router-dom'
import books from '../content/books.json'

const Books = () => {
  return (
    <div> 
        {books.map((book) => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
          <p>{book.description}</p>
        </div>
      ))}
      </div>
  )
}

export default Books